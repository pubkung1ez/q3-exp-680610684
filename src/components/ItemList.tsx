import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

export function ItemList() {
  const expenses = useItemStore((state) => state.expenses);
  const deleteExpense = useItemStore((state) => state.deleteExpense);

  return (
    <Card className="overflow-hidden border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-200 bg-slate-50/80 px-6 py-4">
        <CardTitle className="font-semibold">
          Recent Expenses
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="px-6 py-4 text-slate-600">Date</TableHead>
              <TableHead className="px-6 py-4 text-slate-600">Title</TableHead>
              <TableHead className="px-6 py-4 text-slate-600">Category</TableHead>
              <TableHead className="px-6 py-4 text-right text-slate-600">
                Amount
              </TableHead>
              <TableHead className="px-6 py-4 text-right text-slate-600" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-8 text-center text-muted-foreground"
                >
                  No expenses recorded yet.
                </TableCell>
              </TableRow>
            ) : (
              expenses.map((item) => (
                <TableRow key={item.id} className="border-b border-slate-200">
                  <TableCell className="px-6 py-4">
                    {item.date}
                  </TableCell>
                  <TableCell className="px-6 py-4 font-medium">
                    {item.title}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge
                      variant="secondary"
                      className="rounded-md bg-slate-200 hover:bg-slate-200"
                    >
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right font-semibold">
                    ฿{item.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="h-9 rounded-md bg-red-500 px-3 text-white hover:bg-red-600"
                      onClick={() => deleteExpense(item.id)}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
