import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const contracts = [
  { 
    id: "CTR-001", 
    date: "2024-03-12", 
    car: "Volvo XC60", 
    type: "Såld", 
    amount: "425,000 kr",
    status: "Klar"
  },
  { 
    id: "CTR-002", 
    date: "2024-03-08", 
    car: "BMW X3", 
    type: "Köpt", 
    amount: "385,000 kr",
    status: "Obetald"
  },
  { 
    id: "CTR-003", 
    date: "2024-03-01", 
    car: "Audi Q5", 
    type: "Såld", 
    amount: "395,000 kr",
    status: "Klar"
  },
];

export const ContractsTable = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredContracts = contracts.filter((contract) => {
    if (filter === "all") return true;
    if (filter === "köpta") return contract.type === "Köpt";
    if (filter === "sålda") return contract.type === "Såld";
    if (filter === "obetalda") return contract.status === "Obetald";
    if (filter === "klara") return contract.status === "Klar";
    return true;
  });

  return (
    <Card className="glass-card mb-8 hover-scale">
      <CardHeader>
        <CardTitle className="text-white">Kontrakt</CardTitle>
        <div className="mt-4">
          <RadioGroup
            defaultValue="all"
            className="flex flex-wrap gap-4"
            onValueChange={setFilter}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="text-white">Alla</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="köpta" id="köpta" />
              <Label htmlFor="köpta" className="text-white">Köpta</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sålda" id="sålda" />
              <Label htmlFor="sålda" className="text-white">Sålda</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="obetalda" id="obetalda" />
              <Label htmlFor="obetalda" className="text-white">Obetalda</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="klara" id="klara" />
              <Label htmlFor="klara" className="text-white">Klara</Label>
            </div>
          </RadioGroup>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-white/10">
              <TableHead className="text-white">Kontrakt Nr</TableHead>
              <TableHead className="text-white">Datum</TableHead>
              <TableHead className="text-white">Bil</TableHead>
              <TableHead className="text-white">Typ</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Belopp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContracts.map((contract) => (
              <TableRow key={contract.id} className="border-white/10">
                <TableCell className="font-medium text-white">{contract.id}</TableCell>
                <TableCell className="text-white/80">{contract.date}</TableCell>
                <TableCell className="text-white/80">{contract.car}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    contract.type === 'Såld' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-purple-500/20 text-purple-300'
                  }`}>
                    {contract.type}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    contract.status === 'Klar' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {contract.status}
                  </span>
                </TableCell>
                <TableCell className="text-white/80">{contract.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};