"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "warning" as const,
    title: "Membrane Fouling Detected",
    description: "Reactor Unit 3 - Nanofiltration efficiency dropped by 8%",
    time: "12 minutes ago",
    action: "Schedule cleaning",
  },
  {
    id: 2,
    type: "success" as const,
    title: "Optimization Applied",
    description: "AI adjusted flow rate in Unit 7, efficiency increased by 3.2%",
    time: "1 hour ago",
    action: "View details",
  },
  {
    id: 3,
    type: "info" as const,
    title: "Batch Recovery Complete",
    description: "Batch #2847 logged to blockchain - 97.3% purity achieved",
    time: "2 hours ago",
    action: "View certificate",
  },
  {
    id: 4,
    type: "error" as const,
    title: "Contamination Risk",
    description: "Elevated trace metals detected in Reactor Unit 5",
    time: "3 hours ago",
    action: "Review data",
  },
]

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircle,
  info: Info,
  error: XCircle,
}

const colorMap = {
  warning: "text-warning",
  success: "text-success",
  info: "text-primary",
  error: "text-destructive",
}

export function AlertsPanel() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">AI Monitoring & Alerts</h3>
          <p className="text-sm text-muted-foreground mt-1">Anomaly detection & predictions</p>
        </div>
        <Badge variant="outline" className="text-muted-foreground">
          {alerts.length} active
        </Badge>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = iconMap[alert.type]
          return (
            <div
              key={alert.id}
              className="p-4 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className="flex gap-3">
                <Icon className={`h-5 w-5 ${colorMap[alert.type]} flex-shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{alert.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{alert.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                    <button className="text-xs text-primary hover:underline font-medium">{alert.action} →</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
