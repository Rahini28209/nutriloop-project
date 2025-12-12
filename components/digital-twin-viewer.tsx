"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Maximize2 } from "lucide-react"

const reactorNodes = [
  { id: "R1", x: 120, y: 100, status: "active", efficiency: 92, temp: 36 },
  { id: "R2", x: 120, y: 220, status: "active", efficiency: 89, temp: 35 },
  { id: "R3", x: 320, y: 100, status: "warning", efficiency: 76, temp: 38 },
  { id: "R4", x: 320, y: 220, status: "active", efficiency: 91, temp: 36 },
]

const connections = [
  { from: "inlet", to: "R1" },
  { from: "inlet", to: "R2" },
  { from: "R1", to: "filter" },
  { from: "R2", to: "filter" },
  { from: "filter", to: "R3" },
  { from: "filter", to: "R4" },
  { from: "R3", to: "outlet" },
  { from: "R4", to: "outlet" },
]

export function DigitalTwinViewer() {
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationSpeed, setSimulationSpeed] = useState(1)

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">System Virtual Model</h3>
          <p className="text-sm text-muted-foreground mt-1">Real-time digital twin visualization</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1.5 animate-pulse" />
            Synced
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative bg-secondary/30 rounded-lg p-8 min-h-[400px] border border-border">
        {/* Inlet */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <span className="text-xs font-bold">IN</span>
            </div>
            <span className="text-xs text-muted-foreground">Inlet</span>
          </div>
        </div>

        {/* Reactors */}
        {reactorNodes.map((reactor) => (
          <div key={reactor.id} className="absolute" style={{ left: reactor.x, top: reactor.y }}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`h-16 w-16 rounded-lg border-2 flex flex-col items-center justify-center ${
                  reactor.status === "active"
                    ? "bg-success/10 border-success"
                    : "bg-warning/10 border-warning animate-pulse"
                }`}
              >
                <span className="text-xs font-bold">{reactor.id}</span>
                <span className="text-xs text-muted-foreground">{reactor.efficiency}%</span>
              </div>
              <span className="text-xs text-muted-foreground">{reactor.temp}°C</span>
            </div>
          </div>
        ))}

        {/* Filter Unit */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 w-20 rounded-lg bg-accent/20 border-2 border-accent flex items-center justify-center">
              <span className="text-xs font-bold">FILTER</span>
            </div>
            <span className="text-xs text-muted-foreground">Nanofiltration</span>
          </div>
        </div>

        {/* Outlet */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-success/20 border-2 border-success flex items-center justify-center">
              <span className="text-xs font-bold">OUT</span>
            </div>
            <span className="text-xs text-muted-foreground">Outlet</span>
          </div>
        </div>

        {/* Flow animations */}
        {isSimulating && (
          <>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="oklch(0.65 0.18 250)" />
                </marker>
              </defs>
              {/* Flow lines */}
              <line
                x1="70"
                y1="50%"
                x2="110"
                y2="120"
                stroke="oklch(0.65 0.18 250)"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              >
                <animate attributeName="stroke-dasharray" from="0,10" to="10,0" dur="1s" repeatCount="indefinite" />
              </line>
            </svg>
          </>
        )}
      </div>

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => setIsSimulating(!isSimulating)} className="gap-2">
            {isSimulating ? (
              <>
                <Pause className="h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Run Simulation
              </>
            )}
          </Button>
          <Button size="sm" variant="outline" onClick={() => setIsSimulating(false)}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Speed:</span>
          {[1, 2, 4].map((speed) => (
            <Button
              key={speed}
              size="sm"
              variant={simulationSpeed === speed ? "default" : "outline"}
              onClick={() => setSimulationSpeed(speed)}
              className="h-8 w-8 p-0"
            >
              {speed}x
            </Button>
          ))}
        </div>
      </div>
    </Card>
  )
}
