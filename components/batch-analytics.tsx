"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const nutrientData = [
  { nutrient: "N", batches: 847, avgPurity: 96.2 },
  { nutrient: "P", batches: 623, avgPurity: 94.8 },
  { nutrient: "K", batches: 512, avgPurity: 92.5 },
  { nutrient: "Ca", batches: 421, avgPurity: 89.3 },
  { nutrient: "Mg", batches: 344, avgPurity: 87.6 },
]

export function BatchAnalytics() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Nutrient Analytics</h3>
        <p className="text-sm text-muted-foreground mt-1">Recovery by nutrient type</p>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={nutrientData}>
          <XAxis dataKey="nutrient" stroke="#4a5568" fontSize={11} tickLine={false} />
          <YAxis stroke="#4a5568" fontSize={11} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.17 0.01 240)",
              border: "1px solid oklch(0.25 0.015 240)",
              borderRadius: "0.375rem",
            }}
          />
          <Bar dataKey="batches" fill="oklch(0.65 0.18 250)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-3">
        {nutrientData.map((item) => (
          <div key={item.nutrient} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold">{item.nutrient}</span>
              </div>
              <div>
                <p className="text-sm font-semibold">{item.batches} batches</p>
                <p className="text-xs text-muted-foreground">Total recovered</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">{item.avgPurity}%</p>
              <p className="text-xs text-muted-foreground">Avg purity</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
