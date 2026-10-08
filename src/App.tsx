import { AddItemDialog } from "./components/AddItemDialog";
import { ItemList } from "./components/ItemList";
import { Footer } from "./components/Footer";
import { DashboardTabs } from "./components/DashboardTabs";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex-1 p-6 md:p-10">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Expenditure Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your everyday expenses and budget easily.
              </p>
            </div>
            <AddItemDialog />
          </div>

          <DashboardTabs />
          <ItemList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
