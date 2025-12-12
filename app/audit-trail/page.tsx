import { DashboardHeader } from "@/components/dashboard-header"
import { BlockchainOverview } from "@/components/blockchain-overview"
import { AuditRecords } from "@/components/audit-records"
import { CertificateViewer } from "@/components/certificate-viewer"
import { BlockchainStats } from "@/components/blockchain-stats"

export default function AuditTrailPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Blockchain Audit Trail</h2>
          <p className="text-muted-foreground mt-2">Immutable records for compliance and certification</p>
        </div>
        <BlockchainOverview />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AuditRecords />
          </div>
          <BlockchainStats />
        </div>
        <CertificateViewer />
      </main>
    </div>
  )
}
