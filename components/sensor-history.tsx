"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const historyData = [
  { time: "00:00", ph: 7.2, temp: 35.8, flow: 122, pressure: 3.6 },
  { time: "02:00", ph: 7.3, temp: 36.1, flow: 125, pressure: 3.7 },
  { time: "04:00", ph: 7.1, temp: 35.9, flow: 120, pressure: 3.5 },
  { time: "06:00", ph: 7.2, temp: 36.2, flow: 124, pressure: 3.6 },
  { time: "08:00", ph: 7.4, temp: 36.5, flow: 128, pressure: 3.8 },
  { time: "10:00", ph: 7.3, temp: 36.3, flow: 126, pressure: 3.7 },
  { time: "12:00", ph: 7.2, temp: 36.0, flow: 123, pressure: 3.6 },
  { time: "14:00", ph: 7.1, temp: 35.8, flow: 121, pressure: 3.5 },
  { time: "16:00", ph: 7.3, temp: 36.2, flow: 127, pressure: 3.8 },
  { time: "18:00", ph: 7.2, temp: 36.1, flow: 124, pressure: 3.7 },
  { time: "20:00", ph: 7.4, temp: 36.4, flow: 129, pressure: 3.9 },
  { time: "22:00", ph: 7.2, temp: 36.0, flow: 125, pressure: 3.7 },
]

const timeRanges = [
  { label: "24H", value: "24h" },
  { label: "7D", value: "7d" },
  { label: "30D", value: "30d" },
]

export function SensorHistory() {
  const [selectedRange, setSelectedRange] = useState("24h")

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Historical Sensor Data</h3>
          <p className="text-sm text-muted-foreground mt-1">Multi-parameter trends over time</p>
        </div>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={selectedRange === range.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedRange(range.value)}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={historyData}>
          <defs>
            <linearGradient id="phGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.6 0.2 200)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="oklch(0.6 0.2 200)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="#4a5568" fontSize={11} tickLine={false} />
          <YAxis stroke="#4a5568" fontSize={11} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.17 0.01 240)",
              border: "1px solid oklch(0.25 0.015 240)",
              borderRadius: "0.375rem",
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="ph" stroke="oklch(0.65 0.18 250)" fill="url(#phGradient)" strokeWidth={2} />
          <Area type="monotone" dataKey="temp" stroke="oklch(0.6 0.2 200)" fill="url(#tempGradient)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
