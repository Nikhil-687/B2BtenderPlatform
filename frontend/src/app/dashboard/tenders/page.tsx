"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, Filter, MoreHorizontal, Calendar, DollarSign, Users, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import SideBar from "@/components/app-sidebar"
import Header from "../header"

export default function TendersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const tenders = [
    {
      id: 1,
      title: "Website Development Project",
      description: "Looking for a modern, responsive website for our e-commerce business...",
      budget: "$25,000 - $50,000",
      deadline: "2024-02-15",
      applications: 12,
      status: "Active",
      category: "Technology",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Marketing Campaign Design",
      description: "Need creative marketing materials for our new product launch...",
      budget: "$10,000 - $20,000",
      deadline: "2024-02-20",
      applications: 8,
      status: "Active",
      category: "Marketing",
      createdAt: "2024-01-18",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Seeking experienced developers for iOS and Android app development...",
      budget: "$40,000 - $80,000",
      deadline: "2024-03-01",
      applications: 15,
      status: "Draft",
      category: "Technology",
      createdAt: "2024-01-20",
    },
    {
      id: 4,
      title: "Office Interior Design",
      description: "Complete office renovation and interior design for 5000 sq ft space...",
      budget: "$30,000 - $60,000",
      deadline: "2024-01-30",
      applications: 22,
      status: "Closed",
      category: "Design",
      createdAt: "2024-01-05",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Draft":
        return "secondary"
      case "Closed":
        return "outline"
      default:
        return "secondary"
    }
  }

  const filteredTenders = tenders.filter(
    (tender) =>
      tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6" style={{marginLeft:"400px"}}>
      <SideBar></SideBar>
      <div>
        <Header path={["dashboard", "tenders"]}></Header>
        <div className="flex items-center justify-between"  style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop:"6vh", marginLeft:"2vw", marginBottom:"4vh", marginRight:"4vw"}}>
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontSize: "1.875rem", fontWeight: "700", color: "#111827" }} >My Tenders</h1>
            <p className="text-gray-600 mt-1" style={{ color: "#4B5563", marginTop: "0.25rem" }} >Manage and track your tender postings</p>
          </div>
          <Link href="/dashboard/tenders/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }}  />
              Create Tender
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4" style={{ display: "flex", alignItems: "center", gap: "1rem" }} >
        <div className="relative flex-1 max-w-md" style={{ position: "relative", flex: 1, maxWidth: "28rem" }} >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", height: "1rem", width: "1rem" }} />
          <Input
            placeholder="Search tenders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            style={{ paddingLeft: "2.5rem", height:"4vh", marginBottom:"2vh", outline:"none" }}
          />
        </div>
        <div style={{marginBottom:"2vh"}}>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }} />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TabsList>
          <TabsTrigger value="all">All Tenders</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="grid gap-4" style={{ display: "grid", gap: "1rem" }}          >
            {filteredTenders.map((tender) => (
              <Card key={tender.id} className="hover-box transition-shadow" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <CardHeader>
                  <div className="flex items-start justify-between" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }} >
                    <div className="space-y-2" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}  >
                      <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CardTitle className="text-xl">{tender.title}</CardTitle>
                        <Badge variant={getStatusColor(tender.status)}>{tender.status}</Badge>
                      </div>
                      <CardDescription className="text-base">{tender.description}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }} />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }} />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }} />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="responsive-grid">
                    <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <DollarSign className="h-4 w-4 text-green-600" style={{ height: "1rem", width: "1rem", color: "#16A34A" }}    />
                      <span className="font-medium">Budget:</span>
                      <span>{tender.budget}</span>
                    </div>
                    <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Calendar className="h-4 w-4 text-blue-600" style={{ height: "1rem", width: "1rem", color: "blue" }} />
                      <span className="font-medium">Deadline:</span>
                      <span>{tender.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Users className="h-4 w-4 text-purple-600" style={{ height: "1rem", width: "1rem", color: "purple" }}  />
                      <span className="font-medium">Applications:</span>
                      <span>{tender.applications}</span>
                    </div>
                    <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span className="font-medium">Category:</span>
                      <Badge variant="outline">{tender.category}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem", paddingTop: "1rem", borderTop:"1px solid #bbb" }}>
                    <span className="text-sm text-gray-500" style={{ fontSize: "0.875rem", color: "#6B7280" }} >Created on {tender.createdAt}</span>
                    <div className="flex items-center gap-2" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Link href={`/dashboard/tenders/${tender.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/dashboard/tenders/${tender.id}/application`}>
                        <Button size="sm">View Applications ({tender.applications})</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}