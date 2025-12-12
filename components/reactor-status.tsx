"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"

const reactors = [
  { id: "A-1", status: "operational" as const, efficiency: 92 },
  { id: "A-2", status: "operational" as const, efficiency: 89 },
  { id: "B-1", status: "maintenance" as const, efficiency: 0 },
  { id: "B-2", status: "operational" as const, efficiency: 91 },
  { id: "C-1", status: "operational" as const, efficiency: 88 },
  { id: "C-2", status: "warning" as const, efficiency: 76 },
  { id: "D-1", status: "operational" as const, efficiency: 94 },
  { id: "D-2", status: "operational" as const, efficiency: 90 },
]

export function ReactorStatus() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Reactor Units</h3>
        <p className="text-sm text-muted-foreground mt-1">Bio-electrochemical status</p>
      </div>

      <div className="space-y-3">
        {reactors.map((reactor) => {
          const isOperational = reactor.status === "operational"
          const isMaintenance = reactor.status === "maintenance"
          const isWarning = reactor.status === "warning"

          return (
            <div key={reactor.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
              <div className="flex items-center gap-3">
                {isOperational && <CheckCircle className="h-4 w-4 text-success" />}
                {isMaintenance && <XCircle className="h-4 w-4 text-muted-foreground" />}
                {isWarning && <AlertTriangle className="h-4 w-4 text-warning" />}
                <div>
                  <p className="font-mono text-sm font-semibold">Reactor {reactor.id}</p>
                  <p className="text-xs text-muted-foreground capitalize">{reactor.status}</p>
                </div>
              </div>
              <div className="text-right">
                {reactor.efficiency > 0 ? (
                  <>
                    <p className="text-sm font-bold">{reactor.efficiency}%</p>
                    <p className="text-xs text-muted-foreground">efficiency</p>
                  </>
                ) : (
                  <Badge variant="outline" className="text-xs">
                    Offline
                  </Badge>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
