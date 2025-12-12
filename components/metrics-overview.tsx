"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Droplet, Zap, Factory } from "lucide-react"

const metrics = [
  {
    label: "Recovery Efficiency",
    value: "87.4%",
    change: "+2.3%",
    trend: "up" as const,
    icon: TrendingUp,
  },
  {
    label: "Nutrient Purity",
    value: "94.2%",
    change: "+0.8%",
    trend: "up" as const,
    icon: Droplet,
  },
  {
    label: "Energy Consumption",
    value: "342 kWh",
    change: "-5.1%",
    trend: "down" as const,
    icon: Zap,
  },
  {
    label: "Active Reactors",
    value: "12/14",
    change: "85.7%",
    trend: "neutral" as const,
    icon: Factory,
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive = metric.trend === "up"
        const isNegative = metric.trend === "down"

        return (
          <Card key={metric.label} className="p-5 bg-card border-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
                <p className="text-3xl font-bold mt-2 tracking-tight">{metric.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {metric.trend !== "neutral" &&
                    (isPositive ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-success" />
                    ))}
                  <span
                    className={`text-sm font-medium ${metric.trend === "neutral" ? "text-muted-foreground" : "text-success"}`}
                  >
                    {metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs last week</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
