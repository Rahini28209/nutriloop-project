"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const recoveryData = [
  { day: "Mon", efficiency: 82, energy: 380 },
  { day: "Tue", efficiency: 85, energy: 365 },
  { day: "Wed", efficiency: 84, energy: 372 },
  { day: "Thu", efficiency: 87, energy: 355 },
  { day: "Fri", efficiency: 86, energy: 342 },
  { day: "Sat", efficiency: 88, energy: 338 },
  { day: "Sun", efficiency: 87, energy: 342 },
]

const purityData = [
  { nutrient: "Nitrogen", current: 96, target: 95 },
  { nutrient: "Phosphorus", current: 94, target: 93 },
  { nutrient: "Potassium", current: 92, target: 90 },
  { nutrient: "Calcium", current: 89, target: 88 },
]

export function EfficiencyCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6 bg-card border-border">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Recovery Efficiency Trend</h3>
          <p className="text-sm text-muted-foreground mt-1">Weekly performance overview</p>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={recoveryData}>
            <defs>
              <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" stroke="#4a5568" fontSize={12} tickLine={false} />
            <YAxis stroke="#4a5568" fontSize={12} tickLine={false} domain={[75, 95]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.17 0.01 240)",
                border: "1px solid oklch(0.25 0.015 240)",
                borderRadius: "0.375rem",
              }}
            />
            <Area
              type="monotone"
              dataKey="efficiency"
              stroke="oklch(0.65 0.18 250)"
              strokeWidth={2}
              fill="url(#efficiencyGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Nutrient Purity Levels</h3>
          <p className="text-sm text-muted-foreground mt-1">Current vs target specifications</p>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={purityData} layout="vertical">
            <XAxis type="number" stroke="#4a5568" fontSize={12} tickLine={false} domain={[0, 100]} />
            <YAxis type="category" dataKey="nutrient" stroke="#4a5568" fontSize={12} tickLine={false} width={90} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.17 0.01 240)",
                border: "1px solid oklch(0.25 0.015 240)",
                borderRadius: "0.375rem",
              }}
            />
            <Bar dataKey="target" fill="oklch(0.25 0.015 240)" radius={[0, 4, 4, 0]} />
            <Bar dataKey="current" fill="oklch(0.65 0.18 250)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
