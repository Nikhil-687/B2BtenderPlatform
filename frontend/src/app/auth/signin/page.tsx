"use client";

import type React from "react";
import { useState } from "react";
import { Building2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
// import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

export default function SignInPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);


		

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			router.push("/dashboard");
		}, 1500);
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eef2ff 100%)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "1rem",
			}}
		>
			<div style={{ width: "100%", maxWidth: "28rem" }}>
				<div style={{ textAlign: "center", marginBottom: "2rem" }}>
					<Link
						href="/"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "0.5rem",
							marginBottom: "1.5rem",
							textDecoration: "none",
						}}
					>
						<Building2
							style={{ height: "32px", width: "32px", color: "#2563eb" }}
						/>
						<span
							style={{
								fontSize: "1.5rem",
								fontWeight: "bold",
								color: "#111827",
							}}
						>
							TenderHub
						</span>
					</Link>
					<h1
						style={{
							fontSize: "1.875rem",
							fontWeight: "bold",
							color: "#111827",
							marginBottom: "0.5rem",
						}}
					>
						Welcome back
					</h1>
					<p style={{ color: "#6b7280" }}>
						Sign in to your account to continue
					</p>
				</div>

				<div
					className="card"
					style={{
						border: "none",
						boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
					}}
				>
					<div className="card-header" style={{ textAlign: "center" }}>
						<h2 className="card-title">Sign In</h2>
						<p className="card-description">
							Enter your credentials to access your account
						</p>
					</div>
					<div className="card-content">
						<form
							onSubmit={handleSubmit}
							style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
						>
							<div className="form-group">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									id="email"
									type="email"
									placeholder="Enter your email"
									className="form-input"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<div style={{ position: "relative" }}>
									<input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
										className="form-input"
										style={{ paddingRight: "2.5rem" }}
										required
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										style={{
											position: "absolute",
											right: "0.75rem",
											top: "50%",
											transform: "translateY(-50%)",
											background: "none",
											border: "none",
											cursor: "pointer",
											color: "#6b7280",
										}}
									>
										{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
									</button>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "0.5rem",
									}}
								>
									<input id="remember" type="checkbox" />
									<label htmlFor="remember" style={{ fontSize: "0.875rem" }}>
										Remember me
									</label>
								</div>
								<Link
									href="/auth/forgot-password"
									style={{
										fontSize: "0.875rem",
										color: "#2563eb",
										textDecoration: "none",
									}}
								>
									Forgot password?
								</Link>
							</div>
							<button
								type="submit"
								className="btn btn-primary"
								style={{ width: "100%" }}
								disabled={isLoading}
							>
								{isLoading ? (
									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: "0.5rem",
										}}
									>
										<div className="spinner"></div>
										Signing in...
									</div>
								) : (
									"Sign In"
								)}
							</button>
						</form>

						<div style={{ marginTop: "1.5rem" }}>
							<div
								style={{
									height: "1px",
									backgroundColor: "#e5e7eb",
									margin: "1rem 0",
								}}
							></div>
							<div
								style={{
									textAlign: "center",
									fontSize: "0.875rem",
									color: "#6b7280",
								}}
							>
								Don't have an account?{" "}
								<Link
									href="/auth/signup"
									style={{ color: "#2563eb", textDecoration: "none" }}
								>
									Sign up
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
