"use client"

import { FileText, Users, TrendingUp, Clock, Eye, MessageSquare, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"

export default function DashboardPage({ usr } : { usr : { userName: string } } ) {
  const stats = [
    {
      title: "Active Tenders",
      value: "12",
      change: "+2 from last month",
      icon: FileText,
      color: "#2563eb",
    },
    {
      title: "Applications Received",
      value: "48",
      change: "+12 from last week",
      icon: Users,
      color: "#16a34a",
    },
    {
      title: "Success Rate",
      value: "68%",
      change: "+5% from last month",
      icon: TrendingUp,
      color: "#7c3aed",
    },
    {
      title: "Pending Reviews",
      value: "7",
      change: "2 urgent",
      icon: Clock,
      color: "#ea580c",
    },
  ]

  const recentTenders = [
    {
      id: 1,
      title: "Website Development Project",
      budget: "$25,000 - $50,000",
      deadline: "2024-02-15",
      applications: 12,
      status: "Active",
    },
    {
      id: 2,
      title: "Marketing Campaign Design",
      budget: "$10,000 - $20,000",
      deadline: "2024-02-20",
      applications: 8,
      status: "Active",
    },
    {
      id: 3,
      title: "Mobile App Development",
      budget: "$40,000 - $80,000",
      deadline: "2024-03-01",
      applications: 15,
      status: "Draft",
    },
  ]

  const recentApplications = [
    {
      id: 1,
      company: "TechSolutions Inc.",
      tender: "Website Development Project",
      amount: "$35,000",
      status: "Under Review",
      submittedAt: "2 hours ago",
    },
    {
      id: 2,
      company: "Creative Agency",
      tender: "Marketing Campaign Design",
      amount: "$15,000",
      status: "Shortlisted",
      submittedAt: "1 day ago",
    },
    {
      id: 3,
      company: "Mobile Experts",
      tender: "Mobile App Development",
      amount: "$65,000",
      status: "New",
      submittedAt: "3 days ago",
    },
  ]

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Welcome Section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#111827" }}>Welcome back, {usr.userName}!</h1>
          <p style={{ color: "#6b7280", marginTop: "0.25rem" }}>Here's what's happening with your tenders today.</p>
        </div>
        <Link href="/dashboard/tenders/new" className="btn btn-primary">
          Create New Tender
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid md-grid-cols-4" style={{ gap: "1rem" }}>
        {stats.map((stat) => (
          <div key={stat.title} className="stats-card">
            <div
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}
            >
              <span className="stats-label">{stat.title}</span>
              <stat.icon style={{ height: "16px", width: "16px", color: stat.color }} />
            </div>
            <div className="stats-value">{stat.value}</div>
            <p className="stats-change">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid md-grid-cols-2" style={{ gap: "1.5rem" }}>
        {/* Recent Tenders */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FileText style={{ height: "20px", width: "20px" }} />
              Recent Tenders
            </h3>
            <p className="card-description">Your latest tender postings</p>
          </div>
          <div className="card-content" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {recentTenders.map((tender) => (
              <div
                key={tender.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <h4 style={{ fontWeight: "500" }}>{tender.title}</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      fontSize: "0.875rem",
                      color: "#6b7280",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <DollarSign style={{ height: "12px", width: "12px" }} />
                      {tender.budget}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Calendar style={{ height: "12px", width: "12px" }} />
                      {tender.deadline}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Users style={{ height: "12px", width: "12px" }} />
                      {tender.applications} applications
                    </span>
                  </div>
                </div>
                <div className={`badge ${tender.status === "Active" ? "badge-primary" : "badge-secondary"}`}>
                  {tender.status}
                </div>
              </div>
            ))}
            <Link href="/dashboard/tenders" className="btn btn-outline" style={{ width: "100%" }}>
              View All Tenders
            </Link>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MessageSquare style={{ height: "20px", width: "20px" }} />
              Recent Applications
            </h3>
            <p className="card-description">Latest applications to your tenders</p>
          </div>
          <div className="card-content" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {recentApplications.map((application) => (
              <div
                key={application.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <h4 style={{ fontWeight: "500" }}>{application.company}</h4>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{application.tender}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      fontSize: "0.875rem",
                      color: "#9ca3af",
                    }}
                  >
                    <span>{application.amount}</span>
                    <span>{application.submittedAt}</span>
                  </div>
                </div>
                <div
                  className={`badge ${
                    application.status === "Shortlisted"
                      ? "badge-primary"
                      : application.status === "New"
                        ? "badge-secondary"
                        : "badge-outline"
                  }`}
                >
                  {application.status}
                </div>
              </div>
            ))}
            <Link href="/dashboard/applications" className="btn btn-outline" style={{ width: "100%" }}>
              View All Applications
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Quick Actions</h3>
          <p className="card-description">Common tasks to help you manage your tenders</p>
        </div>
        <div className="card-content">
          <div className="grid md-grid-cols-3" style={{ gap: "1rem" }}>
            <Link
              href="/dashboard/tenders/new"
              className="btn btn-outline"
              style={{
                width: "100%",
                height: "80px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <FileText style={{ height: "24px", width: "24px" }} />
              Create Tender
            </Link>
            <Link
              href="/dashboard/browse"
              className="btn btn-outline"
              style={{
                width: "100%",
                height: "80px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Eye style={{ height: "24px", width: "24px" }} />
              Browse Tenders
            </Link>
            <Link
              href="/dashboard/companies"
              className="btn btn-outline"
              style={{
                width: "100%",
                height: "80px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Users style={{ height: "24px", width: "24px" }} />
              Find Companies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
