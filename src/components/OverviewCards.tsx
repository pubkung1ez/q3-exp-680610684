import { useItemStore } from "@/store/dataStore";

const currency = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function OverviewCards() {
  const expenses = useItemStore((state) => state.expenses);
  const totalItems = expenses.length;
  const totalSpent = expenses.reduce((acc, item) => acc + item.amount, 0);
  const averageExpense = totalItems === 0 ? 0 : totalSpent / totalItems;

  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-100 p-3 md:grid-cols-3">
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
        <div className="pb-2 text-sm font-medium text-slate-700">Total Spent</div>
        <div className="text-[2rem] font-bold leading-none text-red-500">
          ฿{currency.format(totalSpent)}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
        <div className="pb-2 text-sm font-medium text-slate-700">
          Total Transactions
        </div>
        <div className="text-[2rem] font-bold leading-none text-slate-800">
          {totalItems}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
        <div className="pb-2 text-sm font-medium text-slate-700">
          Average Expense
        </div>
        <div className="text-[2rem] font-bold leading-none text-green-600">
          ฿{currency.format(averageExpense)}
        </div>
      </div>
    </div>
  );
}
