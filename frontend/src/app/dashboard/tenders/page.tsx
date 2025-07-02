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
        <div className="flex items-center justify-between" style={{marginTop:"100px", marginLeft:"100px"}}>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Tenders</h1>
            <p className="text-gray-600 mt-1">Manage and track your tender postings</p>
          </div>
          <Link href="/dashboard/tenders/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Tender
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search tenders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tenders</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {filteredTenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
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
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Budget:</span>
                      <span>{tender.budget}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Deadline:</span>
                      <span>{tender.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">Applications:</span>
                      <span>{tender.applications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Category:</span>
                      <Badge variant="outline">{tender.category}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <span className="text-sm text-gray-500">Created on {tender.createdAt}</span>
                    <div className="flex items-center gap-2">
                      <Link href={`/dashboard/tenders/${tender.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/dashboard/tenders/${tender.id}/applications`}>
                        <Button size="sm">View Applications ({tender.applications})</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* <TabsContent value="active">
          <div className="grid gap-4">
            {filteredTenders
              .filter((t) => t.status === "Active")
              .map((tender) => (
                <Card key={tender.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">{tender.title}</CardTitle>
                          <Badge variant={getStatusColor(tender.status)}>{tender.status}</Badge>
                        </div>
                        <CardDescription className="text-base">{tender.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="draft">
          <div className="grid gap-4">
            {filteredTenders
              .filter((t) => t.status === "Draft")
              .map((tender) => (
                <Card key={tender.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">{tender.title}</CardTitle>
                          <Badge variant={getStatusColor(tender.status)}>{tender.status}</Badge>
                        </div>
                        <CardDescription className="text-base">{tender.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="closed">
          <div className="grid gap-4">
            {filteredTenders
              .filter((t) => t.status === "Closed")
              .map((tender) => (
                <Card key={tender.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">{tender.title}</CardTitle>
                          <Badge variant={getStatusColor(tender.status)}>{tender.status}</Badge>
                        </div>
                        <CardDescription className="text-base">{tender.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}


{/* <div className="space-y-6"> */}
    //   
      // <div className="flex items-center justify-between">
      //   <div>
      //     <h1 className="text-3xl font-bold text-gray-900">My Tenders</h1>
      //     <p className="text-gray-600 mt-1">Manage and track your tender postings</p>
      //   </div>
      //   <Link href="/dashboard/tenders/new">
      //     <Button>
      //       <Plus className="h-4 w-4 mr-2" />
      //       Create Tender
      //     </Button>
      //   </Link>
      // </div>

      // {/* Search and Filters */}
      // <div className="flex items-center gap-4">
      //   <div className="relative flex-1 max-w-md">
      //     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      //     <Input
      //       placeholder="Search tenders..."
      //       value={searchQuery}
      //       onChange={(e) => setSearchQuery(e.target.value)}
      //       className="pl-10"
      //     />
      //   </div>
      //   <Button variant="outline">
      //     <Filter className="h-4 w-4 mr-2" />
      //     Filter
      //   </Button>
      // </div>

      // {/* Tabs */}
      // <Tabs defaultValue="all" className="space-y-4">
      //   <TabsList>
      //     <TabsTrigger value="all">All Tenders</TabsTrigger>
      //     <TabsTrigger value="active">Active</TabsTrigger>
      //     <TabsTrigger value="draft">Draft</TabsTrigger>
      //     <TabsTrigger value="closed">Closed</TabsTrigger>
      //   </TabsList>

      //   <TabsContent value="all" className="space-y-4">
      //     <div className="grid gap-4">
      //       {filteredTenders.map((tender) => (
      //         <Card key={tender.id} className="hover:shadow-md transition-shadow">
      //           <CardHeader>
      //             <div className="flex items-start justify-between">
      //               <div className="space-y-2">
      //                 <div className="flex items-center gap-2">
      //                   <CardTitle className="text-xl">{tender.title}</CardTitle>
      //                   <Badge variant={getStatusColor(tender.status)}>{tender.status}</Badge>
      //                 </div>
      //                 <CardDescription className="text-base">{tender.description}</CardDescription>
      //               </div>
      //               <DropdownMenu>
      //                 <DropdownMenuTrigger asChild>
      //                   <Button variant="ghost" size="sm">
      //                     <MoreHorizontal className="h-4 w-4" />
      //                   </Button>
      //                 </DropdownMenuTrigger>
      //                 <DropdownMenuContent align="end">
      //                   <DropdownMenuItem>
      //                     <Eye className="h-4 w-4 mr-2" />
      //                     View Details
      //                   </DropdownMenuItem>
      //                   <DropdownMenuItem>
      //                     <Edit className="h-4 w-4 mr-2" />
      //                     Edit
      //                   </DropdownMenuItem>
      //                   <DropdownMenuItem className="text-red-600">
      //                     <Trash2 className="h-4 w-4 mr-2" />
      //                     Delete
      //                   </DropdownMenuItem>
      //                 </DropdownMenuContent>
      //               </DropdownMenu>
      //             </div>
      //           </CardHeader>
      //           <CardContent>
      //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      //               <div className="flex items-center gap-2">
      //                 <DollarSign className="h-4 w-4 text-green-600" />
      //                 <span className="font-medium">Budget:</span>
      //                 <span>{tender.budget}</span>
      //               </div>
      //               <div className="flex items-center gap-2">
      //                 <Calendar className="h-4 w-4 text-blue-600" />
      //                 <span className="font-medium">Deadline:</span>
      //                 <span>{tender.deadline}</span>
      //               </div>
      //               <div className="flex items-center gap-2">
      //                 <Users className="h-4 w-4 text-purple-600" />
      //                 <span className="font-medium">Applications:</span>
      //                 <span>{tender.applications}</span>
      //               </div>
      //               <div className="flex items-center gap-2">
      //                 <span className="font-medium">Category:</span>
      //                 <Badge variant="outline">{tender.category}</Badge>
      //               </div>
      //             </div>
      //             <div className="flex items-center justify-between mt-4 pt-4 border-t">
      //               <span className="text-sm text-gray-500">Created on {tender.createdAt}</span>
      //               <div className="flex items-center gap-2">
      //                 <Link href={`/dashboard/tenders/${tender.id}`}>
      //                   <Button variant="outline" size="sm">
      //                     View Details
      //                   </Button>
      //                 </Link>
      //                 <Link href={`/dashboard/tenders/${tender.id}/applications`}>
      //                   <Button size="sm">View Applications ({tender.applications})</Button>
      //                 </Link>
      //               </div>
      //             </div>
      //           </CardContent>
      //         </Card>
      //       ))}
      //     </div>
      //   </TabsContent>
