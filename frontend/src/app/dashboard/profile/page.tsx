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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Upload,
	X,
	Plus,
	Edit,
	Save,
	Building2,
	Globe,
	Mail,
	Phone,
	MapPin,
	Users,
} from "lucide-react";
import Header from "../header";
import SideBar from "@/components/app-sidebar";
import { companies } from "../companies/page";
export default function ProfilePage() {
	const [isEditing, setIsEditing] = useState(false);
	const [services, setServices] = useState([
		"Web Development",
		"Mobile Apps",
		"Cloud Solutions",
	]);
	const [newService, setNewService] = useState("");

	const addService = () => {
		if (newService.trim() && !services.includes(newService.trim())) {
			setServices([...services, newService.trim()]);
			setNewService("");
		}
	};

	const removeService = (service: string) => {
		setServices(services.filter((s) => s !== service));
	};

	return (
		<div className="space-y-6" style={{ marginLeft: "400px" }}>
			<SideBar companys={[companies[0], companies[1]]}></SideBar>
			<div>
				<Header path={["dashboard", "tenders"]}></Header>

				<div className="space-y-6" style={{ padding: "3vh 1vw 0 2vw" }}>
					{/* Header */}
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">
								Company Profile
							</h1>
							<p className="text-gray-600 mt-1">
								Manage your company information and showcase your capabilities
							</p>
						</div>
						<Button onClick={() => setIsEditing(!isEditing)}>
							{isEditing ? (
								<>
									<Save className="h-4 w-4 mr-2" />
									Save Changes
								</>
							) : (
								<>
									<Edit className="h-4 w-4 mr-2" />
									Edit Profile
								</>
							)}
						</Button>
					</div>

					<Tabs defaultValue="overview" className="space-y-6">
						<TabsList>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "500px",
									paddingBottom: "3vh",
									marginTop: "1vh",
								}}
							>
								<TabsTrigger value="overview">
									<p style={{ padding: "5px 10px" }}>Overview</p>
								</TabsTrigger>
								<TabsTrigger value="services">
									<p style={{ padding: "5px 10px" }}>Services</p>
								</TabsTrigger>
								<TabsTrigger value="portfolio">
									<p style={{ padding: "5px 10px" }}>Portfolio</p>
								</TabsTrigger>
								<TabsTrigger value="team">
									<p style={{ padding: "5px 10px" }}>Team</p>
								</TabsTrigger>
								<TabsTrigger value="certifications">
									<p style={{ padding: "5px 10px" }}>Certifications</p>
								</TabsTrigger>
							</div>
						</TabsList>

						<TabsContent value="overview" className="space-y-6">
							{/* Company Header */}
							<Card>
								<CardContent className="pt-6">
									<div className="flex items-start gap-6">
										<div className="relative">
											<Avatar className="h-24 w-24">
												<AvatarImage
													src="/placeholder.svg?height=96&width=96"
													alt="Company Logo"
												/>
												<AvatarFallback>AC</AvatarFallback>
											</Avatar>
											{isEditing && (
												<Button
													size="sm"
													className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
												>
													<Upload className="h-4 w-4" />
												</Button>
											)}
										</div>
										<div className="flex-1 space-y-4">
											{isEditing ? (
												<div className="grid gap-4 md:grid-cols-2">
													<div className="space-y-2">
														<Label htmlFor="companyName">Company Name</Label>
														<Input
															id="companyName"
															defaultValue="Acme Corporation"
														/>
													</div>
													<div className="space-y-2">
														<Label htmlFor="industry">Industry</Label>
														<Select defaultValue="technology">
															<SelectTrigger>
																<SelectValue />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="technology">
																	Technology
																</SelectItem>
																<SelectItem value="construction">
																	Construction
																</SelectItem>
																<SelectItem value="design">Design</SelectItem>
																<SelectItem value="marketing">
																	Marketing
																</SelectItem>
																<SelectItem value="consulting">
																	Consulting
																</SelectItem>
															</SelectContent>
														</Select>
													</div>
												</div>
											) : (
												<div>
													<h2 className="text-2xl font-bold">
														Acme Corporation
													</h2>
													<div className="flex items-center gap-2 mt-1">
														<Badge>Technology</Badge>
														<Badge className="bg-green-100 text-green-800 border-green-300">
															Verified
														</Badge>
													</div>
												</div>
											)}
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Basic Information */}
							<Card>
								<CardHeader>
									<CardTitle>Basic Information</CardTitle>
									<CardDescription>
										Your company's core details and contact information
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									{isEditing ? (
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="description">Company Description</Label>
												<Textarea
													id="description"
													defaultValue="We are a leading technology company specializing in innovative software solutions for businesses of all sizes. Our team of experienced developers and designers work together to create cutting-edge applications that drive growth and efficiency."
													className="min-h-24"
												/>
											</div>
											<div className="grid gap-4 md:grid-cols-2">
												<div className="space-y-2">
													<Label htmlFor="website">Website</Label>
													<Input id="website" defaultValue="www.acmecorp.com" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="email">Email</Label>
													<Input
														id="email"
														type="email"
														defaultValue="contact@acmecorp.com"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="phone">Phone</Label>
													<Input id="phone" defaultValue="+1 (555) 123-4567" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="employees">Number of Employees</Label>
													<Select defaultValue="50-100">
														<SelectTrigger>
															<SelectValue />
														</SelectTrigger>
														<SelectContent>
															<SelectItem value="1-10">1-10</SelectItem>
															<SelectItem value="11-50">11-50</SelectItem>
															<SelectItem value="50-100">50-100</SelectItem>
															<SelectItem value="100-500">100-500</SelectItem>
															<SelectItem value="500+">500+</SelectItem>
														</SelectContent>
													</Select>
												</div>
											</div>
											<div className="space-y-2">
												<Label htmlFor="address">Address</Label>
												<Textarea
													id="address"
													defaultValue="123 Business Street, Suite 100, San Francisco, CA 94105"
													rows={2}
												/>
											</div>
										</div>
									) : (
										<div className="space-y-4">
											<p className="text-gray-700">
												We are a leading technology company specializing in
												innovative software solutions for businesses of all
												sizes. Our team of experienced developers and designers
												work together to create cutting-edge applications that
												drive growth and efficiency.
											</p>
											<div className="grid gap-4 md:grid-cols-2">
												<div className="flex items-center gap-2">
													<Globe className="h-4 w-4 text-gray-500" />
													<span>www.acmecorp.com</span>
												</div>
												<div className="flex items-center gap-2">
													<Mail className="h-4 w-4 text-gray-500" />
													<span>contact@acmecorp.com</span>
												</div>
												<div className="flex items-center gap-2">
													<Phone className="h-4 w-4 text-gray-500" />
													<span>+1 (555) 123-4567</span>
												</div>
												<div className="flex items-center gap-2">
													<Users className="h-4 w-4 text-gray-500" />
													<span>50-100 employees</span>
												</div>
											</div>
											<div className="flex items-start gap-2">
												<MapPin className="h-4 w-4 text-gray-500 mt-1" />
												<span>
													123 Business Street, Suite 100, San Francisco, CA
													94105
												</span>
											</div>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="services" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Services & Capabilities</CardTitle>
									<CardDescription>
										List the services and capabilities your company offers
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex flex-wrap gap-2">
										{services.map((service) => (
											<div key={service} className="flex items-center gap-1">
												<Badge variant="outline">{service}</Badge>
												{isEditing && (
													<Button
														size="sm"
														variant="ghost"
														className="h-6 w-6 p-0"
														onClick={() => removeService(service)}
													>
														<X className="h-3 w-3" />
													</Button>
												)}
											</div>
										))}
									</div>
									{isEditing && (
										<div className="flex gap-2">
											<Input
												placeholder="Add new service..."
												value={newService}
												onChange={(e) => setNewService(e.target.value)}
												onKeyPress={(e) => e.key === "Enter" && addService()}
											/>
											<Button onClick={addService}>
												<Plus className="h-4 w-4" />
											</Button>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="portfolio" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Portfolio</CardTitle>
									<CardDescription>
										Showcase your best work and completed projects
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid gap-6 md:grid-cols-2">
										<div className="border rounded-lg p-4">
											<img
												src="/placeholder.svg?height=200&width=300"
												alt="Project 1"
												className="w-full h-48 object-cover rounded mb-4"
											/>
											<h4 className="font-semibold mb-2">
												E-commerce Platform
											</h4>
											<p className="text-sm text-gray-600 mb-2">
												Complete e-commerce solution with payment integration
												and inventory management.
											</p>
											<div className="flex gap-2">
												<Badge variant="outline">React</Badge>
												<Badge variant="outline">Node.js</Badge>
												<Badge variant="outline">MongoDB</Badge>
											</div>
										</div>
										<div className="border rounded-lg p-4">
											<img
												src="/placeholder.svg?height=200&width=300"
												alt="Project 2"
												className="w-full h-48 object-cover rounded mb-4"
											/>
											<h4 className="font-semibold mb-2">Mobile Banking App</h4>
											<p className="text-sm text-gray-600 mb-2">
												Secure mobile banking application with biometric
												authentication.
											</p>
											<div className="flex gap-2">
												<Badge variant="outline">React Native</Badge>
												<Badge variant="outline">Firebase</Badge>
												<Badge variant="outline">AWS</Badge>
											</div>
										</div>
									</div>
									{isEditing && (
										<div className="mt-6">
											<Button variant="outline">
												<Plus className="h-4 w-4 mr-2" />
												Add Project
											</Button>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="team" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Team Members</CardTitle>
									<CardDescription>
										Key team members and their roles
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid gap-4 md:grid-cols-2">
										<div className="flex items-center gap-4 p-4 border rounded-lg">
											<Avatar>
												<AvatarImage src="/placeholder.svg?height=40&width=40" />
												<AvatarFallback>JD</AvatarFallback>
											</Avatar>
											<div>
												<h4 className="font-semibold">John Doe</h4>
												<p className="text-sm text-gray-600">CEO & Founder</p>
												<p className="text-xs text-gray-500">
													10+ years experience
												</p>
											</div>
										</div>
										<div className="flex items-center gap-4 p-4 border rounded-lg">
											<Avatar>
												<AvatarImage src="/placeholder.svg?height=40&width=40" />
												<AvatarFallback>JS</AvatarFallback>
											</Avatar>
											<div>
												<h4 className="font-semibold">Jane Smith</h4>
												<p className="text-sm text-gray-600">CTO</p>
												<p className="text-xs text-gray-500">
													8+ years experience
												</p>
											</div>
										</div>
									</div>
									{isEditing && (
										<div className="mt-6">
											<Button variant="outline">
												<Plus className="h-4 w-4 mr-2" />
												Add Team Member
											</Button>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="certifications" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Certifications & Awards</CardTitle>
									<CardDescription>
										Your company's certifications, awards, and recognitions
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="flex items-center gap-4 p-4 border rounded-lg">
											<div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
												<Building2 className="h-6 w-6 text-blue-600" />
											</div>
											<div>
												<h4 className="font-semibold">
													ISO 9001:2015 Certified
												</h4>
												<p className="text-sm text-gray-600">
													Quality Management System
												</p>
												<p className="text-xs text-gray-500">
													Valid until: Dec 2025
												</p>
											</div>
										</div>
										<div className="flex items-center gap-4 p-4 border rounded-lg">
											<div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
												<Building2 className="h-6 w-6 text-green-600" />
											</div>
											<div>
												<h4 className="font-semibold">AWS Partner</h4>
												<p className="text-sm text-gray-600">
													Advanced Consulting Partner
												</p>
												<p className="text-xs text-gray-500">Since: Jan 2022</p>
											</div>
										</div>
									</div>
									{isEditing && (
										<div className="mt-6">
											<Button variant="outline">
												<Plus className="h-4 w-4 mr-2" />
												Add Certification
											</Button>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
