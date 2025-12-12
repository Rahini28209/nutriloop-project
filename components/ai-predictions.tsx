"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Sparkles } from "lucide-react"

const predictions = [
  {
    id: 1,
    metric: "Recovery Efficiency",
    current: 87.4,
    predicted: 89.2,
    change: 1.8,
    confidence: 94,
    timeframe: "Next 6 hours",
    trend: "up" as const,
  },
  {
    id: 2,
    metric: "Membrane Fouling Risk",
    current: 12,
    predicted: 28,
    change: 16,
    confidence: 87,
    timeframe: "Next 12 hours",
    trend: "up" as const,
  },
  {
    id: 3,
    metric: "Energy Consumption",
    current: 342,
    predicted: 318,
    change: -24,
    confidence: 91,
    timeframe: "Next 24 hours",
    trend: "down" as const,
  },
  {
    id: 4,
    metric: "Nutrient Purity",
    current: 94.2,
    predicted: 95.8,
    change: 1.6,
    confidence: 89,
    timeframe: "Next 6 hours",
    trend: "up" as const,
  },
]

export function AIPredictions() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {predictions.map((prediction) => {
        const isPositive = prediction.trend === "up"
        const isGoodTrend =
          (prediction.metric === "Recovery Efficiency" && isPositive) ||
          (prediction.metric === "Nutrient Purity" && isPositive) ||
          (prediction.metric === "Energy Consumption" && !isPositive)

        return (
          <Card key={prediction.id} className="p-5 bg-card border-border">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-primary">AI Prediction</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{prediction.metric}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  isGoodTrend
                    ? "bg-success/10 text-success border-success/20"
                    : "bg-warning/10 text-warning border-warning/20"
                }
              >
                {prediction.confidence}%
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Current</p>
                  <p className="text-xl font-bold">{prediction.current}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Predicted</p>
                  <p className="text-xl font-bold">{prediction.predicted}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                {isPositive ? (
                  <TrendingUp className={`h-4 w-4 ${isGoodTrend ? "text-success" : "text-warning"}`} />
                ) : (
                  <TrendingDown className={`h-4 w-4 ${isGoodTrend ? "text-success" : "text-warning"}`} />
                )}
                <span className={`text-sm font-medium ${isGoodTrend ? "text-success" : "text-warning"}`}>
                  {isPositive ? "+" : ""}
                  {prediction.change}
                </span>
                <span className="text-xs text-muted-foreground">{prediction.timeframe}</span>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
