"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Droplet, TrendingUp } from "lucide-react"

const recommendations = [
  {
    id: 1,
    priority: "high" as const,
    title: "Optimize Flow Rate in Unit A-1",
    impact: "+3.2% efficiency",
    description: "Increase flow rate to 135 L/h based on current nutrient concentration",
    action: "Apply Now",
    icon: Droplet,
    savings: "Est. $240/day",
  },
  {
    id: 2,
    priority: "high" as const,
    title: "Adjust pH Setpoint",
    impact: "+2.1% purity",
    description: "Lower pH target to 7.1 to improve nitrogen recovery in Reactor B-2",
    action: "Apply Now",
    icon: TrendingUp,
    savings: "Est. 15kg N/day",
  },
  {
    id: 3,
    priority: "medium" as const,
    title: "Reduce Energy Consumption",
    impact: "-12% energy use",
    description: "Decrease aeration rate during off-peak hours without affecting performance",
    action: "Schedule",
    icon: Zap,
    savings: "Est. $180/day",
  },
]

export function OptimizationRecommendations() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">AI Recommendations</h3>
          <p className="text-sm text-muted-foreground mt-1">Optimization opportunities</p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          3 Pending
        </Badge>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => {
          const Icon = rec.icon
          const isHigh = rec.priority === "high"

          return (
            <div
              key={rec.id}
              className={`p-4 rounded-lg border transition-colors ${
                isHigh
                  ? "border-primary/30 bg-primary/5 hover:bg-primary/10"
                  : "border-border bg-secondary/30 hover:bg-secondary/50"
              }`}
            >
              <div className="flex gap-3">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10`}>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-semibold text-sm">{rec.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
                          {rec.impact}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{rec.savings}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{rec.description}</p>
                  <Button size="sm" className="h-8 text-xs gap-1">
                    {rec.action}
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
