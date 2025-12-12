"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, XCircle, AlertCircle } from "lucide-react"

const anomalies = [
  {
    id: 1,
    severity: "high" as const,
    title: "Unusual pH Fluctuation",
    reactor: "Unit C-2",
    detected: "8 minutes ago",
    description: "pH variance exceeded normal range by 15% in last hour",
    confidence: 92,
    status: "active" as const,
  },
  {
    id: 2,
    severity: "medium" as const,
    title: "Flow Rate Deviation",
    reactor: "Nanofiltration 3",
    detected: "23 minutes ago",
    description: "Flow rate pattern doesn't match historical baseline",
    confidence: 78,
    status: "investigating" as const,
  },
  {
    id: 3,
    severity: "low" as const,
    title: "Temperature Drift",
    reactor: "Unit A-2",
    detected: "1 hour ago",
    description: "Gradual temperature increase detected, within safe range",
    confidence: 85,
    status: "monitoring" as const,
  },
  {
    id: 4,
    severity: "high" as const,
    title: "Conductivity Spike",
    reactor: "Unit B-2",
    detected: "2 hours ago",
    description: "Sudden conductivity increase indicates potential contamination",
    confidence: 96,
    status: "resolved" as const,
  },
]

const severityConfig = {
  high: {
    icon: XCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    border: "border-destructive/20",
  },
  medium: {
    icon: AlertTriangle,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  low: {
    icon: AlertCircle,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
}

const statusConfig = {
  active: { label: "Active", color: "text-destructive" },
  investigating: { label: "Investigating", color: "text-warning" },
  monitoring: { label: "Monitoring", color: "text-primary" },
  resolved: { label: "Resolved", color: "text-success" },
}

export function AnomalyDetection() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Anomaly Detection</h3>
          <p className="text-sm text-muted-foreground mt-1">AI-detected irregularities</p>
        </div>
        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
          2 Active
        </Badge>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {anomalies.map((anomaly) => {
          const config = severityConfig[anomaly.severity]
          const Icon = config.icon
          const statusInfo = statusConfig[anomaly.status]

          return (
            <div
              key={anomaly.id}
              className={`p-4 rounded-lg border ${config.border} ${config.bg} hover:bg-opacity-60 transition-colors`}
            >
              <div className="flex gap-3">
                <Icon className={`h-5 w-5 ${config.color} flex-shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-semibold text-sm">{anomaly.title}</p>
                    <Badge variant="outline" className="text-xs">
                      {anomaly.confidence}%
                    </Badge>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">{anomaly.reactor}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{anomaly.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{anomaly.detected}</span>
                      <span className={statusInfo.color}>• {statusInfo.label}</span>
                    </div>
                    <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                      Details
                    </Button>
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
