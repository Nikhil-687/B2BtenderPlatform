"use client"
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Calendar, DollarSign, Users, Eye, Edit, Trash2, Building2 } from "lucide-react"
import SideBar  from "@/components/app-sidebar";
import Header from "../../../header";
const Tenders = [
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
      status: "Closed",
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

  const Applications = [[
    {
        id: 1,
        company: "Bhushan Traders",
        Compid:"1",
        title: "Office Interior Design",
        description: "Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...",
        budget: "$30,000 - $60,000",
        deadline: "2024-01-30",
        category: "Design",
        createdAt: "2024-01-10",
      },{
        id: 1,
        company: "Bhushan Traders",
        Compid:"1",
        title: "Office Interior Design",
        description: "Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...",
        budget: "$30,000 - $60,000",
        deadline: "2024-01-30",
        category: "Design",
        createdAt: "2024-01-10",
      },{
        id: 1,
        company: "Bhushan Traders",
        Compid:"1",
        title: "Office Interior Design",
        description: "Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...Complete office renovation and interior design for 5000 sq ft space...",
        budget: "$30,000 - $60,000",
        deadline: "2024-01-30",
        category: "Design",
        createdAt: "2024-01-10",
      },
  ],[],[],[]]
export default function Page(){
    const grabparam = useParams();
    const id = grabparam.id as string;
    const index = id ? parseInt(id) - 1 : -1;
    const tender = Tenders[index];
    const applications = Applications[index];

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
    return (
        <>
            <div className="space-y-6" style={{marginLeft:"400px"}}>
              <SideBar></SideBar>
              <div>
                <Header path={["dashboard", "tenders"]}></Header>
                
            <div>
                {index > -1 ? 
                <div>
                    <Card key={tender.id} className="hover-box transition-shadow" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <CardContent>
                                <hr />
                                <div style={{fontSize:"3vw"}}>APPLICATIONS</div>
                                {applications.map((val) => (
                                    <div>
                                        <Card key={val.id} className="hover-box transition-shadow" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            <CardHeader style={{margin:"3vh 2vw 6vh 0vw" }}>
                                                <div className="flex items-start justify-between" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }} >
                                                    <div className="space-y-2" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}  >
                                                      <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "start", gap: "0.5rem", marginBottom:"1vh" }}>
                                                        <CardTitle className="text-xl" style={{fontSize:"2vw"}}>{val.title}</CardTitle>
                                                        <div style={{padding:"2vh 2vw"}}>
                                                            {/* <Badge variant={getStatusColor(tender.status)}>{val.status}</Badge> */}
                                                        </div>
                                                      </div>
                                                      <div style={{marginLeft:"1vw"}}>
                                                          <CardDescription className="text-base">{val.description}</CardDescription>
                                                      </div>
                                                    </div>
                                                    {/* <div style={{padding:"2vw"}}> */}
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="sm">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                                <div style={{padding:"1vh 1vw"}}>
                                                                    <DropdownMenuItem>
                                                                    <div style={{padding: "1vh 1vw"}}>
                                                                        <Eye className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }} />
                                                                        View Details
                                                                    </div>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem>
                                                                    <div style={{padding: "1vh 1vw"}}>
                                                                        <Edit className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }} />
                                                                        Edit
                                                                    </div>
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem className="text-red-600">
                                                                    <div style={{padding: "1vh 1vw"}}>
                                                                        <Trash2 className="h-4 w-4 mr-2" style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }} />
                                                                        Delete
                                                                    </div>
                                                                    </DropdownMenuItem>
                                                                </div>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                  </div>
                                                </CardHeader>
                                                {/* <hr style={{color:"#555"}} /> */}
                                                <CardContent>
                                                  <div className="responsive-grid" style={{lineHeight:"5vh"}}>
                                                   <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                      <Building2 className="h-4 w-4 text-green-600" style={{ height: "1rem", width: "1rem", color: "#16A34A" }}    />
                                                      <span className="font-medium">Company:</span>
                                                      <span>{val.company}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                      <DollarSign className="h-4 w-4 text-green-600" style={{ height: "1rem", width: "1rem", color: "#16A34A" }}    />
                                                      <span className="font-medium">Budget:</span>
                                                      <span>{val.budget}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                      <Calendar className="h-4 w-4 text-blue-600" style={{ height: "1rem", width: "1rem", color: "blue" }} />
                                                      <span className="font-medium">Deadline:</span>
                                                      <span>{val.deadline}</span>
                                                    </div>
                                                    {/* <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                      <Users className="h-4 w-4 text-purple-600" style={{ height: "1rem", width: "1rem", color: "purple" }}  />
                                                      <span className="font-medium">Applications:</span>
                                                      <span>{val.applications}</span>
                                                    </div> */}
                                                    <div className="flex items-center gap-2"style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                      <span className="font-medium">Category:</span>
                                                      <Badge variant="outline">{val.category}</Badge>
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center justify-between mt-4 pt-4 " style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem", paddingTop: "1rem", border:"none" }}>
                                                    <span className="text-sm text-gray-500" style={{ fontSize: "0.875rem", color: "#6B7280" }} >Created on {val.createdAt}</span>
                                                    <div className="flex items-center gap-2" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                      <Link href={`/dashboard/companies/${val.Compid}/contact`}>
                                                        <Button variant="outline" size="sm">
                                                          contact
                                                        </Button>
                                                      </Link>
                                                      <Link href={`/dashboard/companies/${val.Compid}`}>
                                                        <Button variant="destructed" size="sm">
                                                          Know the Company
                                                        </Button>
                                                      </Link>
                                                      {/* <Link href={`/dashboard/tenders/${val.id}/applications`}>
                                                        <Button size="sm">View Applications ({val.applications})</Button>
                                                      </Link> */}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <hr />
                                    </div>
                                ))} 

                              {/* <div className="flex items-center justify-between mt-4 pt-4 " style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem", paddingTop: "1rem", border:"none" }}>
                                <span className="text-sm text-gray-500" style={{ fontSize: "0.875rem", color: "#6B7280" }} >Created on {tender.createdAt}</span>
                                <div className="flex items-center gap-2" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                  <Link href={`/dashboard/tenders/${tender.id}`}>
                                    <Button variant="outline" size="sm">
                                      View Details
                                    </Button>
                                  </Link>
                                  <Link href={`/dashboard/tenders/${tender.id}/applications`}>
                                    <Button size="sm">View Applications ({tender.applications})</Button>
                                  </Link>
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>
                </div>
                : <></>}
            </div>
            </div></div>
        </>
    )
}