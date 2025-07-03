"use client";
// import Image from "next/image";
// import img from "@/../public/globe.svg"

import {
	Building2,
	FileText,
	Search,
	Users,
	BarChart3,
	Settings,
	Bell,
	Plus,
} from "lucide-react";
import Link from "next/link";

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
];

export default function AppSidebar({companys} : {companys : {id: number,
	name: string,
	logo: string,
	industry: string,
	location: string,
	employees: string,
	rating: number,
	reviews: number,
	description: string,
	services: string[],
	website: string,
	email: string,
	phone: string,
	verified: boolean,
	completedProjects: number}[]}) {
		const companies = companys || [{
			
				id: -1,
				name: "TenderApp",
				logo: "/placeholder.svg?height=60&width=60",
				industry: "none",
				location: "none",
				employees: "0",
				rating: 5,
				reviews: 0,
				description:
					"you are not a part of any create one to get satrted ar ask owner of other company to add you",
				services: [
				],
				website: "example.com",
				email: "contact@consultcorp.com",
				phone: "+1 (555) 654-3210",
				verified: false,
				completedProjects: 0,
			
		}];
	return (
		<div className="sidebar" style={{ width: "20vw" }}>
			<div className="sidebar-header">
				<div
					style={{
						display: "contents",
						alignItems: "center",
						gap: "0.5rem",
						marginBottom: "1rem",
					}}
				>
					
					{
						companies.map((val, ind) => (
							<div key={ind}>
								{/* <
									style={{ height: "24px", width: "24px", color: "#2563eb" }}
								/>Building2 */}
								{/* <Image src={img} alt="image not loading properly"></Image> */}
								{/* <span style={{ fontSize: "1.125rem", fontWeight: "bold" }}>
									{ind}{"ji"}
								</span> */}
								{val.id != -1 && <Link
									href={`/dashboard/companies/${val.id}`}
									className="btn btn-secondary"
									style={{ width: "100%", fontSize: "0.875rem", marginBottom:"1rem" }}
								>
									{val.name}{`->`}
								</Link>}
							</div>
						))
					}
				</div>
				<Link
					href="/dashboard/companies/new"
					className="btn btn-primary"
					style={{ width: "100%", fontSize: "0.875rem" }}
				>
					<Plus
						style={{ height: "16px", width: "16px", marginRight: "0.5rem" }}
					/>
					Create Company
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
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								fontSize: "0.875rem",
							}}
						>
							<span style={{ fontWeight: "500" }}>John Doe</span>
							<span style={{ fontSize: "0.75rem", color: "#6b7280" }}>
								Acme Corp
							</span>
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
	);
}
