import { Activity, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Activity className="h-7 w-7 text-primary" />
                <h1 className="text-2xl font-bold tracking-tight">Nutriloop</h1>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <span className="h-1.5 w-1.5 rounded-full bg-success mr-1.5" />
                Production
              </Badge>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  Overview
                </Button>
              </Link>
              <Link href="/sensors">
                <Button variant="ghost" size="sm">
                  Sensors
                </Button>
              </Link>
              <Link href="/ai-insights">
                <Button variant="ghost" size="sm">
                  AI Insights
                </Button>
              </Link>
              <Link href="/digital-twin">
                <Button variant="ghost" size="sm">
                  Digital Twin
                </Button>
              </Link>
              <Link href="/audit-trail">
                <Button variant="ghost" size="sm">
                  Audit Trail
                </Button>
              </Link>
              <Link href="/batches">
                <Button variant="ghost" size="sm">
                  Batches
                </Button>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
