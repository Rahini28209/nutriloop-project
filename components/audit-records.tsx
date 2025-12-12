"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, Download, CheckCircle } from "lucide-react"

const records = [
  {
    id: "BTC-2847",
    batchNumber: "2024-12-2847",
    timestamp: "2024-12-12 14:32:18 UTC",
    nutrient: "Nitrogen",
    quantity: "324 kg",
    purity: "97.3%",
    blockHash: "0x4a7b...c9e2",
    txHash: "0x9f2d...a8b3",
    verified: true,
  },
  {
    id: "BTC-2846",
    batchNumber: "2024-12-2846",
    timestamp: "2024-12-12 09:15:42 UTC",
    nutrient: "Phosphorus",
    quantity: "187 kg",
    purity: "95.8%",
    blockHash: "0x3c8a...d7f1",
    txHash: "0x7e1b...c4d6",
    verified: true,
  },
  {
    id: "BTC-2845",
    batchNumber: "2024-12-2845",
    timestamp: "2024-12-11 22:48:55 UTC",
    nutrient: "Potassium",
    quantity: "245 kg",
    purity: "93.2%",
    blockHash: "0x2b9f...e6a8",
    txHash: "0x5d3c...b2e9",
    verified: true,
  },
  {
    id: "BTC-2844",
    batchNumber: "2024-12-2844",
    timestamp: "2024-12-11 18:22:31 UTC",
    nutrient: "Nitrogen",
    quantity: "298 kg",
    purity: "96.1%",
    blockHash: "0x1a8e...f5b7",
    txHash: "0x4c2a...d1e8",
    verified: true,
  },
]

export function AuditRecords() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Blockchain Records</h3>
          <p className="text-sm text-muted-foreground mt-1">Immutable batch logging</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search batches..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 w-[240px] bg-secondary/30"
          />
        </div>
      </div>

      <div className="space-y-3">
        {records.map((record) => (
          <div
            key={record.id}
            className="p-4 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-mono font-semibold text-sm">{record.batchNumber}</p>
                  {record.verified && (
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{record.timestamp}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3">
              <div>
                <p className="text-xs text-muted-foreground">Nutrient</p>
                <p className="text-sm font-semibold">{record.nutrient}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Quantity</p>
                <p className="text-sm font-semibold">{record.quantity}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Purity</p>
                <p className="text-sm font-semibold">{record.purity}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-border space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Block Hash:</span>
                <code className="font-mono bg-muted/30 px-2 py-1 rounded">{record.blockHash}</code>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Transaction:</span>
                <code className="font-mono bg-muted/30 px-2 py-1 rounded">{record.txHash}</code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
