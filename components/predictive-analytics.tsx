"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, ReferenceLine } from "recharts"

const forecastData = [
  { time: "Now", actual: 87.4, predicted: null, upperBound: null, lowerBound: null },
  { time: "+2h", actual: null, predicted: 88.1, upperBound: 89.2, lowerBound: 87.0 },
  { time: "+4h", actual: null, predicted: 88.8, upperBound: 90.1, lowerBound: 87.5 },
  { time: "+6h", actual: null, predicted: 89.2, upperBound: 90.5, lowerBound: 87.9 },
  { time: "+8h", actual: null, predicted: 89.5, upperBound: 91.0, lowerBound: 88.0 },
  { time: "+10h", actual: null, predicted: 89.8, upperBound: 91.3, lowerBound: 88.3 },
  { time: "+12h", actual: null, predicted: 90.1, upperBound: 91.8, lowerBound: 88.4 },
]

export function PredictiveAnalytics() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Efficiency Forecast</h3>
          <p className="text-sm text-muted-foreground mt-1">12-hour prediction with confidence intervals</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            ML Model v2.4
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            Updated 5m ago
          </Badge>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={forecastData}>
          <defs>
            <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.6 0.2 200)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="oklch(0.6 0.2 200)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="#4a5568" fontSize={11} tickLine={false} />
          <YAxis stroke="#4a5568" fontSize={11} tickLine={false} domain={[85, 93]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.17 0.01 240)",
              border: "1px solid oklch(0.25 0.015 240)",
              borderRadius: "0.375rem",
            }}
          />
          <Legend />
          <ReferenceLine x="Now" stroke="oklch(0.55 0.22 25)" strokeDasharray="3 3" label="Current" />
          <Area
            type="monotone"
            dataKey="upperBound"
            stroke="none"
            fill="url(#confidenceGradient)"
            name="Confidence Range"
          />
          <Area type="monotone" dataKey="lowerBound" stroke="none" fill="oklch(0.17 0.01 240)" />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="oklch(0.6 0.2 200)"
            fill="none"
            strokeWidth={2}
            name="Actual"
          />
          <Area
            type="monotone"
            dataKey="predicted"
            stroke="oklch(0.65 0.18 250)"
            fill="url(#predictedGradient)"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Predicted"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
