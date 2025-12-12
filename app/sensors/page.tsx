import { DashboardHeader } from "@/components/dashboard-header"
import { SensorGrid } from "@/components/sensor-grid"
import { SensorHistory } from "@/components/sensor-history"
import { ReactorStatus } from "@/components/reactor-status"

export default function SensorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">IoT Sensor Monitoring</h2>
          <p className="text-muted-foreground mt-2">
            Real-time data from bio-electrochemical reactors and nanofiltration units
          </p>
        </div>
        <SensorGrid />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SensorHistory />
          </div>
          <ReactorStatus />
        </div>
      </main>
    </div>
  )
}
