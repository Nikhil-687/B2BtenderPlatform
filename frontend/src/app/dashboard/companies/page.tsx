"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Users, Star, Building2, Globe, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const companies = [
    {
      id: 1,
      name: "TechSolutions Inc.",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Technology",
      location: "San Francisco, CA",
      employees: "50-100",
      rating: 4.8,
      reviews: 24,
      description: "Leading software development company specializing in web and mobile applications...",
      services: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI/ML"],
      website: "www.techsolutions.com",
      email: "contact@techsolutions.com",
      phone: "+1 (555) 123-4567",
      verified: true,
      completedProjects: 150,
    },
    {
      id: 2,
      name: "Creative Design Studio",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Design",
      location: "New York, NY",
      employees: "10-25",
      rating: 4.9,
      reviews: 18,
      description: "Award-winning design studio creating beautiful brands and digital experiences...",
      services: ["Brand Design", "UI/UX", "Print Design", "Marketing Materials"],
      website: "www.creativedesign.com",
      email: "hello@creativedesign.com",
      phone: "+1 (555) 987-6543",
      verified: true,
      completedProjects: 89,
    },
    {
      id: 3,
      name: "BuildRight Construction",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Construction",
      location: "Chicago, IL",
      employees: "100-500",
      rating: 4.6,
      reviews: 42,
      description:
        "Premier construction company with 20+ years of experience in commercial and residential projects...",
      services: ["Commercial Construction", "Residential", "Renovation", "Project Management"],
      website: "www.buildright.com",
      email: "info@buildright.com",
      phone: "+1 (555) 456-7890",
      verified: true,
      completedProjects: 320,
    },
    {
      id: 4,
      name: "Marketing Pros Agency",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Marketing",
      location: "Austin, TX",
      employees: "25-50",
      rating: 4.7,
      reviews: 31,
      description: "Full-service digital marketing agency helping businesses grow their online presence...",
      services: ["Digital Marketing", "SEO", "Social Media", "Content Creation"],
      website: "www.marketingpros.com",
      email: "team@marketingpros.com",
      phone: "+1 (555) 321-0987",
      verified: false,
      completedProjects: 200,
    },
    {
      id: 5,
      name: "ConsultCorp",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Consulting",
      location: "Boston, MA",
      employees: "500+",
      rating: 4.5,
      reviews: 67,
      description: "Strategic consulting firm providing business transformation and technology solutions...",
      services: ["Strategy Consulting", "Digital Transformation", "Process Optimization", "Change Management"],
      website: "www.consultcorp.com",
      email: "contact@consultcorp.com",
      phone: "+1 (555) 654-3210",
      verified: true,
      completedProjects: 450,
    },
  ]

  const industries = ["All", "Technology", "Design", "Construction", "Marketing", "Consulting", "Manufacturing"]

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Companies Directory</h1>
        <p className="text-gray-600 mt-1">Discover and connect with qualified companies for your projects</p>
      </div>

      {/* Search and Filters */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search companies, services, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase()}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Company Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sizes</SelectItem>
            <SelectItem value="1-10">1-10 employees</SelectItem>
            <SelectItem value="11-50">11-50 employees</SelectItem>
            <SelectItem value="51-200">51-200 employees</SelectItem>
            <SelectItem value="200+">200+ employees</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredCompanies.length} of {companies.length} companies
          </p>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="projects">Most Projects</SelectItem>
              <SelectItem value="name">Company Name</SelectItem>
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
                    <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">
                        <Link href={`/dashboard/companies/${company.id}`} className="hover:text-blue-600">
                          {company.name}
                        </Link>
                      </CardTitle>
                      {company.verified && (
                        <Badge className="bg-green-100 text-green-800 border-green-300">Verified</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{company.industry}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{company.employees} employees</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{company.rating}</span>
                        <span className="text-gray-500">({company.reviews} reviews)</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-600">{company.completedProjects} completed projects</span>
                    </div>
                    <CardDescription className="text-base mb-3">{company.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.services.map((service) => (
                        <Badge key={service} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      <span>{company.website}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>{company.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>{company.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                    <Link href={`/dashboard/companies/${company.id}`}>
                      <Button size="sm">View Profile</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-6">
          <Button variant="outline">Load More Companies</Button>
        </div>
      </div>
    </div>
  )
}
