import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Account pages
import Login from "@/pages/Login";
import StartConversation from "@/pages/StartConversation";

// Product pages
import FullStackGenAI from "@/pages/product/FullStackGenAI";
import Integrations from "@/pages/product/Integrations";
import GovernanceSecurity from "@/pages/product/GovernanceSecurity";

// Capabilities pages
import GeneratePredict from "@/pages/capabilities/GeneratePredict";

// Industries pages
import FinancialServices from "@/pages/industries/FinancialServices";
import Telecommunications from "@/pages/industries/Telecommunications";

// Resources pages
import ResourceLibrary from "@/pages/resources/ResourceLibrary";
import PersadoAcademy from "@/pages/resources/PersadoAcademy";
import Glossary from "@/pages/resources/Glossary";
import Blog from "@/pages/resources/Blog";
import GetCaseStudy from "@/pages/resources/GetCaseStudy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Account Routes */}
      <Route path="/login" component={Login} />
      <Route path="/start-conversation" component={StartConversation} />
      
      {/* Product Routes */}
      <Route path="/product/full-stack-genai" component={FullStackGenAI} />
      <Route path="/product/integrations" component={Integrations} />
      <Route path="/product/governance-security" component={GovernanceSecurity} />
      
      {/* Capabilities Routes */}
      <Route path="/capabilities/generate-predict" component={GeneratePredict} />
      
      {/* Industries Routes */}
      <Route path="/industries/financial-services" component={FinancialServices} />
      <Route path="/industries/telecommunications" component={Telecommunications} />
      
      {/* Resources Routes */}
      <Route path="/resources/resource-library" component={ResourceLibrary} />
      <Route path="/resources/persado-academy" component={PersadoAcademy} />
      <Route path="/resources/glossary" component={Glossary} />
      <Route path="/resources/blog" component={Blog} />
      <Route path="/resources/get-case-study" component={GetCaseStudy} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
