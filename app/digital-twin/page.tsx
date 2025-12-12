import { DashboardHeader } from "@/components/dashboard-header"
import { DigitalTwinViewer } from "@/components/digital-twin-viewer"
import { SimulationControls } from "@/components/simulation-controls"
import { SimulationResults } from "@/components/simulation-results"
import { ProcessFlowDiagram } from "@/components/process-flow-diagram"

export default function DigitalTwinPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Digital Twin Simulation</h2>
          <p className="text-muted-foreground mt-2">Virtual testing environment for optimization strategies</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DigitalTwinViewer />
          </div>
          <SimulationControls />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <ProcessFlowDiagram />
          <SimulationResults />
        </div>
      </main>
    </div>
  )
}
