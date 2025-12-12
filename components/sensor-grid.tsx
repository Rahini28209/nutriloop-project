"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Wind, Gauge, Beaker, Activity } from "lucide-react"

const sensors = [
  {
    id: "ph-001",
    name: "pH Sensor",
    unit: "Reactor A-1",
    value: "7.2",
    unit_measure: "pH",
    status: "normal" as const,
    icon: Beaker,
    range: "7.0-7.5",
  },
  {
    id: "temp-001",
    name: "Temperature",
    unit: "Reactor A-1",
    value: "36.2",
    unit_measure: "°C",
    status: "normal" as const,
    icon: Thermometer,
    range: "35-38°C",
  },
  {
    id: "flow-001",
    name: "Flow Rate",
    unit: "Nanofiltration Unit 1",
    value: "124",
    unit_measure: "L/h",
    status: "normal" as const,
    icon: Wind,
    range: "100-150",
  },
  {
    id: "pressure-001",
    name: "Pressure",
    unit: "Nanofiltration Unit 1",
    value: "3.8",
    unit_measure: "bar",
    status: "warning" as const,
    icon: Gauge,
    range: "3.0-4.0",
  },
  {
    id: "conductivity-001",
    name: "Conductivity",
    unit: "Reactor B-2",
    value: "2.4",
    unit_measure: "mS/cm",
    status: "normal" as const,
    icon: Activity,
    range: "2.0-3.5",
  },
  {
    id: "do-001",
    name: "Dissolved Oxygen",
    unit: "Reactor B-2",
    value: "5.2",
    unit_measure: "mg/L",
    status: "normal" as const,
    icon: Droplets,
    range: "4.0-6.0",
  },
]

export function SensorGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sensors.map((sensor) => {
        const Icon = sensor.icon
        return (
          <Card key={sensor.id} className="p-5 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{sensor.name}</p>
                  <p className="text-xs text-muted-foreground">{sensor.unit}</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className={
                  sensor.status === "normal"
                    ? "bg-success/10 text-success border-success/20"
                    : "bg-warning/10 text-warning border-warning/20"
                }
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full mr-1.5 ${sensor.status === "normal" ? "bg-success animate-pulse" : "bg-warning animate-pulse"}`}
                />
                {sensor.status}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight">{sensor.value}</span>
                <span className="text-sm text-muted-foreground">{sensor.unit_measure}</span>
              </div>
              <p className="text-xs text-muted-foreground">Range: {sensor.range}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
