import {
	Building2,
	FileText,
	Search,
	Users,
	ArrowRight,
	CheckCircle,
	TrendingUp,
	Shield,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function LandingPage() {
	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eef2ff 100%)",
			}}
		>
			<Nav></Nav>
			{/* Hero Section */}
			<section style={{ padding: "5rem 1rem" }}>
				<div
					className="container"
					style={{ textAlign: "center", maxWidth: "64rem" }}
				>
					<div
						className="badge badge-secondary"
						style={{ marginBottom: "1rem" }}
					>
						🚀 Streamline Your B2B Tender Process
					</div>
					<h1
						style={{
							fontSize: "clamp(2.5rem, 5vw, 4rem)",
							fontWeight: "bold",
							color: "#111827",
							marginBottom: "1.5rem",
							lineHeight: "1.1",
						}}
					>
						Connect, Compete, and Win
						<span style={{ color: "#2563eb" }}> Business Tenders</span>
					</h1>
					<p
						style={{
							fontSize: "1.25rem",
							color: "#6b7280",
							marginBottom: "2rem",
							lineHeight: "1.6",
							maxWidth: "48rem",
							margin: "0 auto 2rem",
						}}
					>
						The complete B2B tender management platform that helps companies
						discover opportunities, manage proposals, and build meaningful
						business relationships.
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
							justifyContent: "center",
							alignItems: "center",
						}}
						className="sm-flex-row"
					>
						<Link href="/auth/signup" className="btn btn-primary btn-lg">
							Start Free Trial
							<ArrowRight
								style={{ marginLeft: "0.5rem", height: "20px", width: "20px" }}
							/>
						</Link>
						<Link href="/demo" className="btn btn-outline btn-lg">
							Watch Demo
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				id="features"
				style={{ padding: "5rem 1rem", backgroundColor: "white" }}
			>
				<div className="container">
					<div style={{ textAlign: "center", marginBottom: "4rem" }}>
						<h2
							style={{
								fontSize: "2.25rem",
								fontWeight: "bold",
								color: "#111827",
								marginBottom: "1rem",
							}}
						>
							Everything You Need to Manage Tenders
						</h2>
						<p
							style={{
								fontSize: "1.25rem",
								color: "#6b7280",
								maxWidth: "32rem",
								margin: "0 auto",
							}}
						>
							From tender discovery to proposal submission, we've got you
							covered with powerful tools and insights.
						</p>
					</div>

					<div className="grid md-grid-cols-3" style={{ gap: "2rem" }}>
						<div
							className="card"
							style={{
								border: "none",
								boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div className="card-header">
								<FileText
									style={{
										height: "48px",
										width: "48px",
										color: "#2563eb",
										marginBottom: "1rem",
									}}
								/>
								<h3 className="card-title">Tender Management</h3>
								<p className="card-description">
									Create, publish, and manage tenders with ease. Set deadlines,
									budgets, and requirements.
								</p>
							</div>
						</div>

						<div
							className="card"
							style={{
								border: "none",
								boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div className="card-header">
								<Search
									style={{
										height: "48px",
										width: "48px",
										color: "#16a34a",
										marginBottom: "1rem",
									}}
								/>
								<h3 className="card-title">Smart Discovery</h3>
								<p className="card-description">
									Find relevant tenders and companies using our advanced search
									and filtering system.
								</p>
							</div>
						</div>

						<div
							className="card"
							style={{
								border: "none",
								boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div className="card-header">
								<Users
									style={{
										height: "48px",
										width: "48px",
										color: "#7c3aed",
										marginBottom: "1rem",
									}}
								/>
								<h3 className="card-title">Company Profiles</h3>
								<p className="card-description">
									Build comprehensive company profiles with portfolios,
									certifications, and capabilities.
								</p>
							</div>
						</div>

						<div
							className="card"
							style={{
								border: "none",
								boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div className="card-header">
								<CheckCircle
									style={{
										height: "48px",
										width: "48px",
										color: "#059669",
										marginBottom: "1rem",
									}}
								/>
								<h3 className="card-title">Application Tracking</h3>
								<p className="card-description">
									Track proposal submissions, manage applications, and
									communicate with stakeholders.
								</p>
							</div>
						</div>

						<div
							className="card"
							style={{
								border: "none",
								boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div className="card-header">
								<TrendingUp
									style={{
										height: "48px",
										width: "48px",
										color: "#ea580c",
										marginBottom: "1rem",
									}}
								/>
								<h3 className="card-title">Analytics & Insights</h3>
								<p className="card-description">
									Get detailed analytics on tender performance, success rates,
									and market trends.
								</p>
							</div>
						</div>

						<div
							className="card"
							style={{
								border: "none",
								boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div className="card-header">
								<Shield
									style={{
										height: "48px",
										width: "48px",
										color: "#dc2626",
										marginBottom: "1rem",
									}}
								/>
								<h3 className="card-title">Secure & Compliant</h3>
								<p className="card-description">
									Enterprise-grade security with role-based access control and
									audit trails.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How it Works */}
			<section
				id="how-it-works"
				style={{ padding: "5rem 1rem", backgroundColor: "#f9fafb" }}
			>
				<div className="container">
					<div style={{ textAlign: "center", marginBottom: "4rem" }}>
						<h2
							style={{
								fontSize: "2.25rem",
								fontWeight: "bold",
								color: "#111827",
								marginBottom: "1rem",
							}}
						>
							How TenderHub Works
						</h2>
						<p style={{ fontSize: "1.25rem", color: "#6b7280" }}>
							Get started in minutes with our simple 3-step process
						</p>
					</div>

					<div className="grid md-grid-cols-3" style={{ gap: "2rem" }}>
						<div style={{ textAlign: "center" }}>
							<div
								style={{
									backgroundColor: "#2563eb",
									color: "white",
									borderRadius: "50%",
									width: "64px",
									height: "64px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "1.5rem",
									fontWeight: "bold",
									margin: "0 auto 1.5rem",
								}}
							>
								1
							</div>
							<h3
								style={{
									fontSize: "1.5rem",
									fontWeight: "600",
									marginBottom: "1rem",
								}}
							>
								Create Your Profile
							</h3>
							<p style={{ color: "#6b7280" }}>
								Set up your company profile with details, capabilities, and
								portfolio to showcase your expertise.
							</p>
						</div>

						<div style={{ textAlign: "center" }}>
							<div
								style={{
									backgroundColor: "#16a34a",
									color: "white",
									borderRadius: "50%",
									width: "64px",
									height: "64px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "1.5rem",
									fontWeight: "bold",
									margin: "0 auto 1.5rem",
								}}
							>
								2
							</div>
							<h3
								style={{
									fontSize: "1.5rem",
									fontWeight: "600",
									marginBottom: "1rem",
								}}
							>
								Discover Opportunities
							</h3>
							<p style={{ color: "#6b7280" }}>
								Browse and search for relevant tenders, or publish your own to
								attract qualified bidders.
							</p>
						</div>

						<div style={{ textAlign: "center" }}>
							<div
								style={{
									backgroundColor: "#7c3aed",
									color: "white",
									borderRadius: "50%",
									width: "64px",
									height: "64px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "1.5rem",
									fontWeight: "bold",
									margin: "0 auto 1.5rem",
								}}
							>
								3
							</div>
							<h3
								style={{
									fontSize: "1.5rem",
									fontWeight: "600",
									marginBottom: "1rem",
								}}
							>
								Submit & Win
							</h3>
							<p style={{ color: "#6b7280" }}>
								Submit compelling proposals, track applications, and build
								lasting business relationships.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section style={{ padding: "5rem 1rem", backgroundColor: "#2563eb" }}>
				<div className="container" style={{ textAlign: "center" }}>
					<h2
						style={{
							fontSize: "2.25rem",
							fontWeight: "bold",
							color: "white",
							marginBottom: "1.5rem",
						}}
					>
						Ready to Transform Your Tender Process?
					</h2>
					<p
						style={{
							fontSize: "1.25rem",
							color: "#bfdbfe",
							marginBottom: "2rem",
							maxWidth: "32rem",
							margin: "0 auto 2rem",
						}}
					>
						Join thousands of companies already using TenderHub to streamline
						their B2B operations.
					</p>
					<Link href="/auth/signup" className="btn btn-secondary btn-lg">
						Start Your Free Trial
						<ArrowRight
							style={{ marginLeft: "0.5rem", height: "20px", width: "20px" }}
						/>
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer
				style={{
					backgroundColor: "#111827",
					color: "white",
					padding: "3rem 1rem",
				}}
			>
				<div className="container">
					<div className="grid md-grid-cols-4" style={{ gap: "2rem" }}>
						<div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
									marginBottom: "1rem",
								}}
							>
								<Building2 style={{ height: "24px", width: "24px" }} />
								<span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
									TenderHub
								</span>
							</div>
							<p style={{ color: "#9ca3af" }}>
								The complete B2B tender management platform for modern
								businesses.
							</p>
						</div>
						<div>
							<h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>
								Product
							</h4>
							<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										Features
									</Link>
								</li>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										Pricing
									</Link>
								</li>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										API
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>
								Company
							</h4>
							<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										About
									</Link>
								</li>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										Blog
									</Link>
								</li>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										Careers
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>
								Support
							</h4>
							<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										Help Center
									</Link>
								</li>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										Contact
									</Link>
								</li>
								<li style={{ marginBottom: "0.5rem" }}>
									<Link
										href="#"
										style={{ color: "#9ca3af", textDecoration: "none" }}
									>
										Privacy
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div
						style={{
							borderTop: "1px solid #374151",
							marginTop: "2rem",
							paddingTop: "2rem",
							textAlign: "center",
							color: "#9ca3af",
						}}
					>
						<p>&copy; 2024 TenderHub. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
