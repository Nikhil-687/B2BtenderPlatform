"use client"

import { Building2, FileText, Search, Users, BarChart3, Settings, Bell, Plus } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "My Tenders",
    url: "/dashboard/tenders",
    icon: FileText,
  },
  {
    title: "Browse Tenders",
    url: "/dashboard/browse",
    icon: Search,
  },
  {
    title: "Companies",
    url: "/dashboard/companies",
    icon: Users,
  },
  {
    title: "Applications",
    url: "/dashboard/applications",
    icon: Bell,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: Building2,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

export default function AppSidebar() {
  return (
    <div className="sidebar" style={{width:"20vw"}}>
      <div className="sidebar-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
          <Building2 style={{ height: "24px", width: "24px", color: "#2563eb" }} />
          <span style={{ fontSize: "1.125rem", fontWeight: "bold" }}>TenderHub</span>
        </div>
        <Link href="/dashboard/tenders/new" className="btn btn-primary" style={{ width: "100%", fontSize: "0.875rem" }}>
          <Plus style={{ height: "16px", width: "16px", marginRight: "0.5rem" }} />
          Create Tender
        </Link>
      </div>

      <div className="sidebar-content">
        <div style={{ padding: "0 1rem" }}>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.5rem",
            }}
          >
            Navigation
          </h3>
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li key={item.title} className="sidebar-menu-item">
                <Link href={item.url} className="sidebar-menu-button">
                  <item.icon style={{ height: "16px", width: "16px" }} />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="dropdown">
          <button className="sidebar-menu-button" style={{ width: "100%" }}>
            <div className="avatar" style={{ width: "24px", height: "24px" }}>
              <img src="/placeholder.svg?height=24&width=24" alt="User" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", fontSize: "0.875rem" }}>
              <span style={{ fontWeight: "500" }}>John Doe</span>
              <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>Acme Corp</span>
            </div>
          </button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Account Settings
            </a>
            <a href="#" className="dropdown-item">
              Support
            </a>
            <a href="#" className="dropdown-item">
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
