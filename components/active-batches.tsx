"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Eye, MoreVertical } from "lucide-react"

const batches = [
  {
    id: "BTH-2851",
    nutrient: "Nitrogen",
    reactor: "Unit A-1, A-2",
    startTime: "14:22",
    progress: 78,
    estimatedCompletion: "2.5 hours",
    currentPurity: "96.8%",
    status: "recovering" as const,
  },
  {
    id: "BTH-2850",
    nutrient: "Phosphorus",
    reactor: "Unit B-1",
    startTime: "13:45",
    progress: 92,
    estimatedCompletion: "45 minutes",
    currentPurity: "94.2%",
    status: "recovering" as const,
  },
  {
    id: "BTH-2849",
    nutrient: "Potassium",
    reactor: "Unit C-1, C-2",
    startTime: "12:10",
    progress: 100,
    estimatedCompletion: "Complete",
    currentPurity: "93.5%",
    status: "quality-check" as const,
  },
  {
    id: "BTH-2848",
    nutrient: "Nitrogen",
    reactor: "Unit D-1",
    startTime: "15:30",
    progress: 45,
    estimatedCompletion: "4.2 hours",
    currentPurity: "95.1%",
    status: "recovering" as const,
  },
  {
    id: "BTH-2847",
    nutrient: "Calcium",
    reactor: "Unit B-2",
    startTime: "11:05",
    progress: 100,
    estimatedCompletion: "Complete",
    currentPurity: "89.7%",
    status: "blockchain-logging" as const,
  },
]

const statusConfig = {
  recovering: {
    label: "Recovering",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  "quality-check": {
    label: "Quality Check",
    color: "bg-warning/10 text-warning border-warning/20",
  },
  "blockchain-logging": {
    label: "Logging to Blockchain",
    color: "bg-accent/10 text-accent border-accent/20",
  },
}

export function ActiveBatches() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Active Recovery Batches</h3>
          <p className="text-sm text-muted-foreground mt-1">Real-time batch processing status</p>
        </div>
        <Button size="sm" className="gap-2">
          Start New Batch
        </Button>
      </div>

      <div className="space-y-4">
        {batches.map((batch) => {
          const config = statusConfig[batch.status]
          return (
            <div
              key={batch.id}
              className="p-4 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-mono font-semibold">{batch.id}</p>
                    <Badge variant="outline" className={config.color}>
                      {config.label}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{batch.nutrient}</span>
                    <span>•</span>
                    <span>{batch.reactor}</span>
                    <span>•</span>
                    <span>Started {batch.startTime}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold">{batch.progress}%</span>
                </div>
                <Progress value={batch.progress} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Purity: {batch.currentPurity}</span>
                  <span>ETA: {batch.estimatedCompletion}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
