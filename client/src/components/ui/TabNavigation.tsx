import { cn } from "@/lib/utils";

interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-6 py-3 rounded-lg border text-sm font-medium transition-all",
            activeTab === tab
              ? "border-[#FF0033] text-[#FF0033] bg-white shadow-sm"
              : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}