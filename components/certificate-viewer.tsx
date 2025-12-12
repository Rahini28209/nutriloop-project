"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Download, Share2, CheckCircle } from "lucide-react"

export function CertificateViewer() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Latest Certificate</h3>
          <p className="text-sm text-muted-foreground mt-1">Export-ready documentation</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="border-2 border-border rounded-lg p-8 bg-secondary/20">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Nutrient Recovery Certificate</h3>
          <p className="text-sm text-muted-foreground">Blockchain-verified compliance documentation</p>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Batch Number</p>
              <p className="font-mono font-semibold">2024-12-2847</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Recovery Date</p>
              <p className="font-semibold">December 12, 2024</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Nutrient Type</p>
              <p className="font-semibold">Nitrogen (NH₃)</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total Quantity</p>
              <p className="font-semibold">324 kg</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Purity Level</p>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <CheckCircle className="h-3 w-3 mr-1" />
                97.3%
              </Badge>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Verification Status</p>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Blockchain Verification</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transaction Hash:</span>
                <code className="font-mono text-xs bg-muted/30 px-2 py-1 rounded">0x9f2d...a8b3</code>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Block Number:</span>
                <code className="font-mono text-xs bg-muted/30 px-2 py-1 rounded">18,234,567</code>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Timestamp:</span>
                <span className="text-xs">2024-12-12 14:32:18 UTC</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              This certificate is cryptographically secured and can be independently verified on the blockchain. All
              data is immutable and tamper-proof.
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
