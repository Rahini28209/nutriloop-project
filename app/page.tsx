import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsOverview } from "@/components/metrics-overview"
import { SystemMonitor } from "@/components/system-monitor"
import { EfficiencyCharts } from "@/components/efficiency-charts"
import { AlertsPanel } from "@/components/alerts-panel"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <MetricsOverview />
        <div className="grid gap-6 lg:grid-cols-2">
          <SystemMonitor />
          <AlertsPanel />
        </div>
        <EfficiencyCharts />
      </main>
    </div>
  )
}
