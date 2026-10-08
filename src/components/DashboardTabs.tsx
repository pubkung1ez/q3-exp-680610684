import { useState } from "react";
import { LayoutGrid, PieChart } from "lucide-react";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState<"overview" | "category">("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutGrid },
    { id: "category", label: "By Category", icon: PieChart },
  ] as const;

  return (
    <div className="w-full rounded-xl border border-slate-200 p-3 shadow-sm">
      <div className="flex w-fit gap-2 rounded-lg bg-slate-200 p-1">
        {tabs.map(({ id, label, icon: Icon }) => {
          const selected = activeTab === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={[
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                selected
                  ? "bg-white shadow-sm ring-1 ring-slate-200"
                  : "hover:text-slate-900",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-3">
        {activeTab === "overview" ? <OverviewCards /> : <CategoryCards />}
      </div>
    </div>
  );
}
