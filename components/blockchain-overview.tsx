"use client"

import { Card } from "@/components/ui/card"
import { Shield, CheckCircle, Clock, FileCheck } from "lucide-react"

const metrics = [
  {
    label: "Total Batches Logged",
    value: "2,847",
    icon: FileCheck,
    color: "text-primary",
  },
  {
    label: "Verified Records",
    value: "100%",
    icon: CheckCircle,
    color: "text-success",
  },
  {
    label: "Avg. Verification Time",
    value: "2.3s",
    icon: Clock,
    color: "text-accent",
  },
  {
    label: "Blockchain Network",
    value: "Active",
    icon: Shield,
    color: "text-primary",
  },
]

export function BlockchainOverview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label} className="p-5 bg-card border-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
                <p className="text-3xl font-bold mt-2 tracking-tight">{metric.value}</p>
              </div>
              <div className={`h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${metric.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
