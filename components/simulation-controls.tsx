"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SimulationControls() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Simulation Parameters</h3>
        <p className="text-sm text-muted-foreground mt-1">Test optimization strategies</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="flow-rate" className="text-sm font-medium">
              Flow Rate
            </Label>
            <Badge variant="outline" className="text-xs">
              135 L/h
            </Badge>
          </div>
          <Slider id="flow-rate" defaultValue={[135]} min={80} max={180} step={5} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>80</span>
            <span>180 L/h</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="ph-level" className="text-sm font-medium">
              pH Setpoint
            </Label>
            <Badge variant="outline" className="text-xs">
              7.2
            </Badge>
          </div>
          <Slider id="ph-level" defaultValue={[7.2]} min={6.5} max={8.0} step={0.1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>6.5</span>
            <span>8.0</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="temperature" className="text-sm font-medium">
              Temperature
            </Label>
            <Badge variant="outline" className="text-xs">
              36°C
            </Badge>
          </div>
          <Slider id="temperature" defaultValue={[36]} min={30} max={42} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>30°C</span>
            <span>42°C</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="aeration" className="text-sm font-medium">
              Aeration Rate
            </Label>
            <Badge variant="outline" className="text-xs">
              65%
            </Badge>
          </div>
          <Slider id="aeration" defaultValue={[65]} min={0} max={100} step={5} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="pt-4 space-y-2">
          <Button className="w-full">Apply to Digital Twin</Button>
          <Button variant="outline" className="w-full bg-transparent">
            Reset to Current
          </Button>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Predicted Impact:</span>
              <span className="font-semibold text-success">+2.8% efficiency</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Risk Level:</span>
              <span className="font-semibold text-success">Low</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Confidence:</span>
              <span className="font-semibold">89%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
