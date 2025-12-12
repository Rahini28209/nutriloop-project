"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const sensorData = [
  { time: "00:00", ph: 7.2, temp: 35, flow: 120 },
  { time: "04:00", ph: 7.3, temp: 36, flow: 125 },
  { time: "08:00", ph: 7.1, temp: 35, flow: 118 },
  { time: "12:00", ph: 7.4, temp: 37, flow: 130 },
  { time: "16:00", ph: 7.2, temp: 36, flow: 122 },
  { time: "20:00", ph: 7.3, temp: 35, flow: 128 },
  { time: "23:59", ph: 7.2, temp: 36, flow: 124 },
]

export function SystemMonitor() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">System Health Monitor</h3>
          <p className="text-sm text-muted-foreground mt-1">Real-time IoT sensor data</p>
        </div>
        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          <span className="h-1.5 w-1.5 rounded-full bg-success mr-1.5 animate-pulse" />
          Live
        </Badge>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">pH Level</span>
            <span className="text-sm text-muted-foreground">7.2 (Optimal: 7.0-7.5)</span>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={sensorData}>
              <XAxis dataKey="time" stroke="#4a5568" fontSize={11} tickLine={false} />
              <YAxis stroke="#4a5568" fontSize={11} tickLine={false} domain={[6.5, 8]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.17 0.01 240)",
                  border: "1px solid oklch(0.25 0.015 240)",
                  borderRadius: "0.375rem",
                }}
              />
              <Line type="monotone" dataKey="ph" stroke="oklch(0.65 0.18 250)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 p-4 rounded-lg bg-secondary/50">
            <p className="text-xs text-muted-foreground font-medium">Temperature</p>
            <p className="text-2xl font-bold">36°C</p>
            <p className="text-xs text-success">Within range</p>
          </div>
          <div className="space-y-2 p-4 rounded-lg bg-secondary/50">
            <p className="text-xs text-muted-foreground font-medium">Flow Rate</p>
            <p className="text-2xl font-bold">124 L/h</p>
            <p className="text-xs text-success">Optimal flow</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
