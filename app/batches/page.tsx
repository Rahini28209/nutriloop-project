import { DashboardHeader } from "@/components/dashboard-header"
import { BatchOverview } from "@/components/batch-overview"
import { ActiveBatches } from "@/components/active-batches"
import { BatchHistory } from "@/components/batch-history"
import { BatchAnalytics } from "@/components/batch-analytics"

export default function BatchesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Batch Management</h2>
          <p className="text-muted-foreground mt-2">Track and manage nutrient recovery batches</p>
        </div>
        <BatchOverview />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ActiveBatches />
          </div>
          <BatchAnalytics />
        </div>
        <BatchHistory />
      </main>
    </div>
  )
}
