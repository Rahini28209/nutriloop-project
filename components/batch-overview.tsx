"use client"

import { Card } from "@/components/ui/card"
import { Package, Clock, CheckCircle, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Active Batches",
    value: "8",
    change: "+2 from yesterday",
    icon: Package,
    color: "text-primary",
  },
  {
    label: "In Recovery",
    value: "5",
    change: "Est. 6.2 hours remaining",
    icon: Clock,
    color: "text-accent",
  },
  {
    label: "Completed Today",
    value: "12",
    change: "+18% vs yesterday",
    icon: CheckCircle,
    color: "text-success",
  },
  {
    label: "Avg. Recovery Rate",
    value: "89.3%",
    change: "+1.2% this week",
    icon: TrendingUp,
    color: "text-success",
  },
]

export function BatchOverview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-5 bg-card border-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <p className="text-3xl font-bold mt-2 tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
