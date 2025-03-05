import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const invoices = [
  { id: "INV-001", date: "2024-03-15", amount: "45,000 kr", status: "Betald" },
  { id: "INV-002", date: "2024-03-10", amount: "32,500 kr", status: "Väntande" },
  { id: "INV-003", date: "2024-03-05", amount: "28,900 kr", status: "Betald" },
];

export const InvoicesTable = () => {
  return (
    <Card className="glass-card mb-8 hover-scale">
      <CardHeader>
        <CardTitle className="text-white">Fakturor</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-white/10">
              <TableHead className="text-white">Faktura Nr</TableHead>
              <TableHead className="text-white">Datum</TableHead>
              <TableHead className="text-white">Belopp</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} className="border-white/10">
                <TableCell className="font-medium text-white">{invoice.id}</TableCell>
                <TableCell className="text-white/80">{invoice.date}</TableCell>
                <TableCell className="text-white/80">{invoice.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    invoice.status === 'Betald' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {invoice.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};