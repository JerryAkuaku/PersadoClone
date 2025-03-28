import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fetch from "node-fetch";
import { log } from "./vite";

interface GenerateTextRequest {
  prompt: string;
  industry: string;
  audience: string;
  channel: string;
  tone: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for AI-powered marketing text generation
  app.post("/api/generate-marketing-text", async (req: Request, res: Response) => {
    try {
      const { prompt, industry, audience, channel, tone } = req.body as GenerateTextRequest;
      
      if (!prompt || !industry || !audience || !channel || !tone) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const apiKey = process.env.HUGGING_FACE_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API key not configured" });
      }
      
      // Construct a detailed prompt for the model
      const fullPrompt = `Generate a marketing message for a ${industry} company targeting ${audience} audience through ${channel} channels. The message should be in a ${tone} tone. The context is: ${prompt}. Generate only the marketing copy, no additional explanation or comments.`;
      
      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            inputs: fullPrompt,
            parameters: {
              max_new_tokens: 250,
              temperature: 0.7,
              top_p: 0.9,
              do_sample: true,
            }
          })
        }
      );
      
      if (!response.ok) {
        const error = await response.text();
        log("Hugging Face API error: " + error, "api");
        return res.status(response.status).json({ error: "Error from AI service" });
      }
      
      const data = await response.json();
      
      // Process the response to extract the generated text
      let generatedText = "";
      if (Array.isArray(data) && data[0] && data[0].generated_text) {
        generatedText = data[0].generated_text;
        
        // Clean up the generated text by removing the prompt part
        if (generatedText.includes(fullPrompt)) {
          generatedText = generatedText.replace(fullPrompt, "").trim();
        }
      } else {
        generatedText = JSON.stringify(data);
      }
      
      res.json({ text: generatedText });
    } catch (error) {
      log("Error generating marketing text: " + error, "api");
      res.status(500).json({ error: "Failed to generate marketing text" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
