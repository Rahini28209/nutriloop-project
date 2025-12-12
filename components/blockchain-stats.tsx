"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const dailyRecords = [
  { day: "Mon", count: 42 },
  { day: "Tue", count: 38 },
  { day: "Wed", count: 45 },
  { day: "Thu", count: 41 },
  { day: "Fri", count: 47 },
  { day: "Sat", count: 35 },
  { day: "Sun", count: 40 },
]

export function BlockchainStats() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Network Status</h3>
        <p className="text-sm text-muted-foreground mt-1">Blockchain health</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <span className="text-sm text-muted-foreground">Network</span>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              <span className="h-1.5 w-1.5 rounded-full bg-success mr-1.5 animate-pulse" />
              Online
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <span className="text-sm text-muted-foreground">Gas Price</span>
            <span className="text-sm font-semibold">24 gwei</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <span className="text-sm text-muted-foreground">Last Block</span>
            <span className="text-sm font-semibold">2m ago</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <span className="text-sm text-muted-foreground">Confirmations</span>
            <span className="text-sm font-semibold">12/12</span>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-sm font-medium mb-4">Daily Records (7d)</p>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={dailyRecords}>
              <defs>
                <linearGradient id="recordsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#4a5568" fontSize={10} tickLine={false} />
              <YAxis stroke="#4a5568" fontSize={10} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.17 0.01 240)",
                  border: "1px solid oklch(0.25 0.015 240)",
                  borderRadius: "0.375rem",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="oklch(0.65 0.18 250)"
                fill="url(#recordsGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}
