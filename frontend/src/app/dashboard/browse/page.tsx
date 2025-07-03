"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
	Search,
	Filter,
	MapPin,
	Calendar,
	Building2,
	Clock,
} from "lucide-react";
import Link from "next/link";
import SideBar from "@/components/app-sidebar";
import Header from "../header";
import { companies } from "../companies/page";
export default function BrowseTendersPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [budgetRange, setBudgetRange] = useState([0, 100000]);

	const tenders = [
		{
			id: 1,
			title: "E-commerce Platform Development",
			company: "RetailCorp Inc.",
			description:
				"Looking for experienced developers to build a comprehensive e-commerce platform with modern features...",
			budget: "$50,000 - $100,000",
			deadline: "2024-03-15",
			location: "New York, NY",
			category: "Technology",
			applicants: 8,
			postedAt: "2 days ago",
			featured: true,
		},
		{
			id: 2,
			title: "Brand Identity Design Package",
			company: "StartupXYZ",
			description:
				"Seeking creative agency for complete brand identity including logo, guidelines, and marketing materials...",
			budget: "$15,000 - $25,000",
			deadline: "2024-02-28",
			location: "San Francisco, CA",
			category: "Design",
			applicants: 12,
			postedAt: "1 day ago",
			featured: false,
		},
		{
			id: 3,
			title: "Office Building Construction",
			company: "Property Developers LLC",
			description:
				"Major construction project for 10-story office building with modern amenities and sustainable features...",
			budget: "$2,000,000 - $3,500,000",
			deadline: "2024-04-01",
			location: "Chicago, IL",
			category: "Construction",
			applicants: 5,
			postedAt: "3 days ago",
			featured: true,
		},
		{
			id: 4,
			title: "Digital Marketing Campaign",
			company: "HealthTech Solutions",
			description:
				"Comprehensive digital marketing strategy for healthcare technology product launch...",
			budget: "$30,000 - $50,000",
			deadline: "2024-03-10",
			location: "Remote",
			category: "Marketing",
			applicants: 15,
			postedAt: "5 days ago",
			featured: false,
		},
		{
			id: 5,
			title: "Mobile App UI/UX Design",
			company: "FinanceApp Co.",
			description:
				"Modern, intuitive UI/UX design for financial mobile application with focus on user experience...",
			budget: "$20,000 - $35,000",
			deadline: "2024-02-25",
			location: "Austin, TX",
			category: "Design",
			applicants: 9,
			postedAt: "1 week ago",
			featured: false,
		},
	];

	const categories = [
		"All",
		"Technology",
		"Design",
		"Construction",
		"Marketing",
		"Consulting",
		"Manufacturing",
	];

	const filteredTenders = tenders.filter(
		(tender) =>
			tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			tender.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			tender.company.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="space-y-6" style={{ marginLeft: "400px" }}>
			<SideBar companys={[companies[0], companies[1]]}></SideBar>
			<div>
				<Header path={["dashboard", "tenders"]}></Header>

				<div className="space-y-6">
					{/* Header */}
					<div>
						<h1 className="text-3xl font-bold text-gray-900">Browse Tenders</h1>
						<p className="text-gray-600 mt-1">
							Discover new business opportunities and submit your proposals
						</p>
					</div>

					{/* Search and Filters */}
					<div className="grid gap-4 md:grid-cols-4">
						<div className="md:col-span-2">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
								<Input
									placeholder="Search tenders, companies, or keywords..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="pl-10"
								/>
							</div>
						</div>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Category" />
							</SelectTrigger>
							<SelectContent>
								{categories.map((category) => (
									<SelectItem key={category} value={category.toLowerCase()}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Location" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Locations</SelectItem>
								<SelectItem value="remote">Remote</SelectItem>
								<SelectItem value="new-york">New York</SelectItem>
								<SelectItem value="san-francisco">San Francisco</SelectItem>
								<SelectItem value="chicago">Chicago</SelectItem>
								<SelectItem value="austin">Austin</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Advanced Filters */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Filter className="h-5 w-5" />
								Advanced Filters
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid gap-4 md:grid-cols-3">
								<div className="space-y-2">
									<label className="text-sm font-medium">Budget Range</label>
									<div className="px-3">
										<Slider
											value={budgetRange}
											onValueChange={setBudgetRange}
											max={500000}
											step={5000}
											className="w-full"
										/>
										<div className="flex justify-between text-xs text-gray-500 mt-1">
											<span>${budgetRange[0].toLocaleString()}</span>
											<span>${budgetRange[1].toLocaleString()}</span>
										</div>
									</div>
								</div>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Posted within" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="today">Today</SelectItem>
										<SelectItem value="week">This week</SelectItem>
										<SelectItem value="month">This month</SelectItem>
										<SelectItem value="all">All time</SelectItem>
									</SelectContent>
								</Select>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Sort by" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="newest">Newest first</SelectItem>
										<SelectItem value="deadline">Deadline</SelectItem>
										<SelectItem value="budget-high">
											Budget (High to Low)
										</SelectItem>
										<SelectItem value="budget-low">
											Budget (Low to High)
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</CardContent>
					</Card>

					{/* Results */}
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<p className="text-gray-600">
								Showing {filteredTenders.length} of {tenders.length} tenders
							</p>
							<div className="flex items-center gap-2">
								<Button variant="outline" size="sm">
									Save Search
								</Button>
								<Button variant="outline" size="sm">
									Create Alert
								</Button>
							</div>
						</div>

						<div className="grid gap-6">
							{filteredTenders.map((tender) => (
								<Card
									key={tender.id}
									className={`hover:shadow-lg transition-shadow ${
										tender.featured ? "ring-2 ring-blue-200 bg-blue-50/30" : ""
									}`}
								>
									<CardHeader>
										<div className="flex items-start justify-between">
											<div className="space-y-2">
												<div className="flex items-center gap-2">
													{tender.featured && (
														<Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
															Featured
														</Badge>
													)}
													<Badge variant="outline">{tender.category}</Badge>
												</div>
												<CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
													<Link href={`/dashboard/browse/${tender.id}`}>
														{tender.title}
													</Link>
												</CardTitle>
												<div className="flex items-center gap-2 text-sm text-gray-600">
													<Building2 className="h-4 w-4" />
													<span>{tender.company}</span>
													<span>•</span>
													<MapPin className="h-4 w-4" />
													<span>{tender.location}</span>
												</div>
											</div>
											<div className="text-right">
												<div className="text-lg font-semibold text-green-600">
													{tender.budget}
												</div>
												<div className="text-sm text-gray-500">
													{tender.applicants} applicants
												</div>
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-base mb-4">
											{tender.description}
										</CardDescription>
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-4 text-sm text-gray-600">
												<div className="flex items-center gap-1">
													<Calendar className="h-4 w-4" />
													<span>Deadline: {tender.deadline}</span>
												</div>
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4" />
													<span>Posted {tender.postedAt}</span>
												</div>
											</div>
											<div className="flex items-center gap-2">
												<Button variant="outline" size="sm">
													Save
												</Button>
												<Link href={`/dashboard/browse/${tender.id}`}>
													<Button size="sm">View Details</Button>
												</Link>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Load More */}
						<div className="text-center pt-6">
							<Button variant="outline">Load More Tenders</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
