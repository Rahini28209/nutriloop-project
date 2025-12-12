"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const processStages = [
  {
    id: 1,
    name: "Pre-treatment",
    status: "active",
    efficiency: 95,
    throughput: "450 L/h",
  },
  {
    id: 2,
    name: "Bio-electrochemical",
    status: "active",
    efficiency: 87,
    throughput: "420 L/h",
  },
  {
    id: 3,
    name: "Nanofiltration",
    status: "active",
    efficiency: 92,
    throughput: "380 L/h",
  },
  {
    id: 4,
    name: "Recovery",
    status: "active",
    efficiency: 94,
    throughput: "350 L/h",
  },
]

export function ProcessFlowDiagram() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Process Flow</h3>
        <p className="text-sm text-muted-foreground mt-1">End-to-end recovery stages</p>
      </div>

      <div className="space-y-4">
        {processStages.map((stage, index) => (
          <div key={stage.id}>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="text-sm font-bold">{stage.id}</span>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-sm">{stage.name}</p>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                    {stage.efficiency}%
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Throughput:</span>
                  <span className="font-medium">{stage.throughput}</span>
                </div>
              </div>
            </div>
            {index < processStages.length - 1 && (
              <div className="ml-5 h-6 w-0.5 bg-border my-1">
                <div className="h-full w-full bg-primary animate-pulse" style={{ animationDuration: "2s" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-secondary/30">
            <p className="text-xs text-muted-foreground mb-1">Overall Yield</p>
            <p className="text-xl font-bold">77.8%</p>
          </div>
          <div className="p-3 rounded-lg bg-secondary/30">
            <p className="text-xs text-muted-foreground mb-1">System Uptime</p>
            <p className="text-xl font-bold">99.2%</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
