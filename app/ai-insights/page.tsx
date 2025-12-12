import { DashboardHeader } from "@/components/dashboard-header"
import { AIPredictions } from "@/components/ai-predictions"
import { AnomalyDetection } from "@/components/anomaly-detection"
import { OptimizationRecommendations } from "@/components/optimization-recommendations"
import { PredictiveAnalytics } from "@/components/predictive-analytics"

export default function AIInsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">AI Insights & Predictions</h2>
          <p className="text-muted-foreground mt-2">Agentic AI monitoring and optimization recommendations</p>
        </div>
        <AIPredictions />
        <div className="grid gap-6 lg:grid-cols-2">
          <AnomalyDetection />
          <OptimizationRecommendations />
        </div>
        <PredictiveAnalytics />
      </main>
    </div>
  )
}
