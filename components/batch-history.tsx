"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, CheckCircle } from "lucide-react"

const history = [
  {
    id: "BTH-2847",
    batchNumber: "2024-12-2847",
    nutrient: "Nitrogen",
    quantity: "324 kg",
    purity: "97.3%",
    efficiency: "91.2%",
    duration: "7.2 hours",
    completedAt: "2024-12-12 14:32",
    status: "completed" as const,
    blockchainTx: "0x9f2d...a8b3",
  },
  {
    id: "BTH-2846",
    batchNumber: "2024-12-2846",
    nutrient: "Phosphorus",
    quantity: "187 kg",
    purity: "95.8%",
    efficiency: "88.7%",
    duration: "6.8 hours",
    completedAt: "2024-12-12 09:15",
    status: "completed" as const,
    blockchainTx: "0x7e1b...c4d6",
  },
  {
    id: "BTH-2845",
    batchNumber: "2024-12-2845",
    nutrient: "Potassium",
    quantity: "245 kg",
    purity: "93.2%",
    efficiency: "86.4%",
    duration: "8.1 hours",
    completedAt: "2024-12-11 22:48",
    status: "completed" as const,
    blockchainTx: "0x5d3c...b2e9",
  },
  {
    id: "BTH-2844",
    batchNumber: "2024-12-2844",
    nutrient: "Nitrogen",
    quantity: "298 kg",
    purity: "96.1%",
    efficiency: "89.8%",
    duration: "7.5 hours",
    completedAt: "2024-12-11 18:22",
    status: "completed" as const,
    blockchainTx: "0x4c2a...d1e8",
  },
  {
    id: "BTH-2843",
    batchNumber: "2024-12-2843",
    nutrient: "Calcium",
    quantity: "156 kg",
    purity: "88.9%",
    efficiency: "82.3%",
    duration: "9.2 hours",
    completedAt: "2024-12-11 12:05",
    status: "completed" as const,
    blockchainTx: "0x3a1f...e7d2",
  },
]

export function BatchHistory() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Batch History</h3>
          <p className="text-sm text-muted-foreground mt-1">Completed recovery batches</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search batches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-[240px] bg-secondary/30"
            />
          </div>
          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Batch ID</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Nutrient</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Quantity</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Purity</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Efficiency</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Duration</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Completed</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((batch) => (
              <tr key={batch.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="py-4 px-4">
                  <p className="font-mono text-sm font-semibold">{batch.batchNumber}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm">{batch.nutrient}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm font-semibold">{batch.quantity}</p>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                    {batch.purity}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm">{batch.efficiency}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-muted-foreground">{batch.duration}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-xs text-muted-foreground">{batch.completedAt}</p>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
