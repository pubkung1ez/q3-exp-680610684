import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Utensils,
  Car,
  Book,
  Lightbulb,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Food: <Utensils className="h-5 w-5" />,
  Transport: <Car className="h-5 w-5" />,
  Education: <Book className="h-5 w-5" />,
  Utilities: <Lightbulb className="h-5 w-5" />,
  Entertainment: <Gamepad2 className="h-5 w-5" />,
  Other: <MoreHorizontal className="h-5 w-5" />,
};

const currency = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function CategoryCards() {
  const expenses = useItemStore((state) => state.expenses);

  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-100 p-3 md:grid-cols-6">
      {categoryOptions.map((category) => {
        const categoryExpenses = expenses.filter(
          (expense) => expense.category === category.value,
        );
        const categoryTotal = categoryExpenses.reduce(
          (acc, item) => acc + item.amount,
          0,
        );

        return (
          <div
            key={category.id}
            className="flex min-h-[120px] flex-col justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 text-left"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-slate-200 text-slate-700">
              {iconMap[category.value]}
            </div>
            <div className="text-sm font-medium text-slate-700">
              {category.label}
            </div>
            <div className="mt-2 text-[1.7rem] font-bold leading-none text-slate-800">
              ฿{currency.format(categoryTotal)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
