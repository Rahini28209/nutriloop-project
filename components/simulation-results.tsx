"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, TrendingDown } from "lucide-react"

const scenarios = [
  {
    id: 1,
    name: "Current Configuration",
    efficiency: 87.4,
    purity: 94.2,
    energy: 342,
    status: "baseline" as const,
  },
  {
    id: 2,
    name: "AI Recommended #1",
    efficiency: 89.2,
    purity: 95.8,
    energy: 318,
    status: "recommended" as const,
    improvements: { efficiency: 1.8, purity: 1.6, energy: -24 },
  },
  {
    id: 3,
    name: "Custom Scenario",
    efficiency: 88.5,
    purity: 94.9,
    energy: 335,
    status: "tested" as const,
    improvements: { efficiency: 1.1, purity: 0.7, energy: -7 },
  },
]

export function SimulationResults() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Scenario Comparison</h3>
        <p className="text-sm text-muted-foreground mt-1">Test results and predictions</p>
      </div>

      <div className="space-y-3">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`p-4 rounded-lg border transition-colors ${
              scenario.status === "recommended"
                ? "border-primary bg-primary/5"
                : "border-border bg-secondary/30 hover:bg-secondary/50"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-sm">{scenario.name}</p>
                {scenario.status === "recommended" && (
                  <Badge variant="outline" className="mt-1 bg-primary/10 text-primary border-primary/20 text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Recommended
                  </Badge>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <div>
                <p className="text-xs text-muted-foreground">Efficiency</p>
                <p className="text-lg font-bold">{scenario.efficiency}%</p>
                {scenario.improvements && (
                  <div className="flex items-center gap-1 mt-0.5">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="text-xs text-success">+{scenario.improvements.efficiency}%</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Purity</p>
                <p className="text-lg font-bold">{scenario.purity}%</p>
                {scenario.improvements && (
                  <div className="flex items-center gap-1 mt-0.5">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="text-xs text-success">+{scenario.improvements.purity}%</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Energy</p>
                <p className="text-lg font-bold">{scenario.energy}</p>
                {scenario.improvements && (
                  <div className="flex items-center gap-1 mt-0.5">
                    <TrendingDown className="h-3 w-3 text-success" />
                    <span className="text-xs text-success">{scenario.improvements.energy}</span>
                  </div>
                )}
              </div>
            </div>

            {scenario.status === "recommended" && (
              <Button size="sm" className="w-full text-xs">
                Apply to Production
              </Button>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
