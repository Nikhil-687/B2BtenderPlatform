"use client";

import type React from "react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import DatePick from "@/app/dashboard/tenders/new/DatePicker";
import { X } from "lucide-react";
import SideBar from "@/components/app-sidebar";
import Header from "../../header";
export default function NewTenderPage() {
	const [date, setDate] = useState<Date>();
	const [attachments, setAttachments] = useState<File[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(event.target.files || []);
		setAttachments((prev) => [...prev, ...files]);
	};

	const removeAttachment = (index: number) => {
		setAttachments((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			router.push("/dashboard/tenders");
		}, 2000);
	};

	return (
		<div style={{ display: "flex", minWidth: "fit-content" }}>
			<div style={{ flexGrow: "0", minWidth: "20vw" }}>
				<SideBar></SideBar>
			</div>

			<div style={{ flexGrow: "1" }}>
				<Header path={["dashboard", "tenders", "new"]}></Header>
				<div
					className=""
					style={{
						maxWidth: "35vw",
						marginLeft: "auto",
						marginRight: "auto",
						display: "flex",
						flexDirection: "column",
						rowGap: "1.5rem",
					}}
				>
					{/* Header */}

					<div style={{ maxWidth: "35vw" }}>
						<h1
							className=""
							style={{
								fontSize: "1.875rem",
								fontWeight: "700",
								color: "#111827",
							}}
						>
							Create New Tender
						</h1>
						<p className="" style={{ color: "#4B5563", marginTop: "0.25rem" }}>
							Post a new tender to attract qualified bidders
						</p>
					</div>

					<form
						onSubmit={handleSubmit}
						className=""
						style={{
							display: "flex",
							flexDirection: "column",
							rowGap: "1.5rem",
							maxWidth: "35vw",
						}}
					>
						{/* Basic Information */}
						<Card
							style={{
								padding: "2vh 2vw",
								border: "2px solid #44444422",
								borderRadius: "10px",
							}}
						>
							<CardHeader style={{ padding: "2vh 2vw 3vh 0" }}>
								<CardTitle style={{ fontSize: "1.7vw", fontWeight: "600" }}>
									Basic Information
								</CardTitle>
								<CardDescription
									style={{
										marginTop: "3px",
										opacity: "0.8",
										fontWeight: "400",
									}}
								>
									Provide the essential details about your tender
								</CardDescription>
							</CardHeader>
							<CardContent
								className=""
								style={{
									display: "flex",
									flexDirection: "column",
									rowGap: "1rem",
								}}
							>
								<div
									className=""
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: "0.5rem",
									}}
								>
									<Label htmlFor="title">Tender Title *</Label>
									<Input
										id="title"
										placeholder="e.g., Website Development Project"
										required
									/>
								</div>

								<div
									className=""
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: "0.5rem",
									}}
								>
									<Label htmlFor="category">Category *</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Select category" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="technology">Technology</SelectItem>
											<SelectItem value="construction">Construction</SelectItem>
											<SelectItem value="marketing">Marketing</SelectItem>
											<SelectItem value="design">Design</SelectItem>
											<SelectItem value="consulting">Consulting</SelectItem>
											<SelectItem value="manufacturing">
												Manufacturing
											</SelectItem>
											<SelectItem value="other">Other</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div
									className=""
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: "0.5rem",
									}}
								>
									<Label htmlFor="description">Description *</Label>
									<Textarea
										id="description"
										placeholder="Provide a detailed description of your project requirements..."
										className=""
										required
										style={{ minHeight: "72px" }}
									/>
								</div>
							</CardContent>
						</Card>

						{/* Budget and Timeline */}
						<Card
							style={{
								padding: "2vh 2vw",
								border: "2px solid #44444422",
								borderRadius: "10px",
							}}
						>
							<CardHeader style={{ padding: "2vh 2vw 3vh 0" }}>
								<CardTitle style={{ fontSize: "1.7vw", fontWeight: "600" }}>
									Budget and Timeline
								</CardTitle>
								<CardDescription>
									Set your budget range and project timeline
								</CardDescription>
							</CardHeader>
							<CardContent
								className=""
								style={{
									display: "flex",
									flexDirection: "column",
									rowGap: "1rem",
								}}
							>
								<div
									className=""
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
										gap: "1rem",
									}}
								>
									<div
										className=""
										style={{
											display: "flex",
											flexDirection: "column",
											rowGap: "0.5rem",
										}}
									>
										<Label htmlFor="minBudget">Minimum Budget ($)</Label>
										<Input id="minBudget" type="number" placeholder="10000" />
									</div>
									<div
										className=""
										style={{
											display: "flex",
											flexDirection: "column",
											rowGap: "0.5rem",
										}}
									>
										<Label htmlFor="maxBudget">Maximum Budget ($)</Label>
										<Input id="maxBudget" type="number" placeholder="50000" />
									</div>
								</div>
								<DatePick></DatePick>

								<div
									className=""
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: "0.5rem",
									}}
								>
									<Label htmlFor="duration">Project Duration</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Select duration" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1-2weeks">1-2 weeks</SelectItem>
											<SelectItem value="1month">1 month</SelectItem>
											<SelectItem value="2-3months">2-3 months</SelectItem>
											<SelectItem value="3-6months">3-6 months</SelectItem>
											<SelectItem value="6months+">6+ months</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</CardContent>
						</Card>

						{/* Requirements */}
						<Card
							style={{
								padding: "2vh 2vw",
								border: "2px solid #44444422",
								borderRadius: "10px",
							}}
						>
							<CardHeader style={{ padding: "2vh 2vw 3vh 0" }}>
								<CardTitle style={{ fontSize: "1.7vw", fontWeight: "600" }}>
									Requirements
								</CardTitle>
								<CardDescription>
									Specify your project requirements and qualifications
								</CardDescription>
							</CardHeader>
							<CardContent
								className=""
								style={{
									display: "flex",
									flexDirection: "column",
									rowGap: "1rem",
								}}
							>
								<div
									className=""
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: "0.5rem",
									}}
								>
									<Label htmlFor="requirements">Technical Requirements</Label>
									<Textarea
										id="requirements"
										placeholder="List specific technical requirements, skills, or qualifications needed..."
										className=""
										style={{ minHeight: "100px", padding: "2vh 3vw 2vh 2vw" }}
									/>
								</div>

								<div
									className=""
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: "0.5rem",
									}}
								>
									<Label htmlFor="deliverables">Expected Deliverables</Label>
									<Textarea
										id="deliverables"
										placeholder="Describe what you expect to receive upon project completion..."
										className=""
										style={{ minHeight: "100px", padding: "2vh 3vw 2vh 2vw" }}
									/>
								</div>
							</CardContent>
						</Card>

						{/* Attachments */}
						<Card
							style={{
								padding: "2vh 2vw",
								border: "2px solid #44444422",
								borderRadius: "10px",
							}}
						>
							<CardHeader style={{ padding: "2vh 2vw 3vh 0" }}>
								<CardTitle style={{ fontSize: "1.7vw", fontWeight: "600" }}>
									Attachments
								</CardTitle>
								<CardDescription>
									Upload any relevant documents, specifications, or files
								</CardDescription>
							</CardHeader>
							<CardContent
								className=""
								style={{
									display: "flex",
									flexDirection: "column",
									rowGap: "1rem",
								}}
							>
								<div
									className=""
									style={{
										borderWidth: "2px",
										borderStyle: "dashed",
										borderColor: "#D1D5DB",
										borderRadius: "0.5rem",
										padding: "1.5rem",
										textAlign: "center",
									}}
								>
									{/* <Upload className="mx-auto h-12 w-12 text-gray-400" /> */}
									<div className="" style={{ marginTop: "4px" }}>
										<Label htmlFor="file-upload" className="cursor-pointer">
											<span
												className=""
												style={{ color: "#2563EB" }}
												onMouseEnter={(e) =>
													(e.currentTarget.style.color = "#3B82F6")
												}
												onMouseLeave={(e) =>
													(e.currentTarget.style.color = "#2563EB")
												}
											>
												Upload files
											</span>
											<span className="" style={{ color: "#6B7280" }}>
												{" "}
												or drag and drop
											</span>
										</Label>
										<Input
											id="file-upload"
											type="file"
											multiple
											className="hidden"
											onChange={handleFileUpload}
										/>
									</div>
									<p
										className=""
										style={{
											fontSize: "0.75rem",
											color: "#6B7280",
											marginTop: "0.5rem",
										}}
									>
										PDF, DOC, DOCX, XLS, XLSX up to 10MB each
									</p>
								</div>

								{attachments.length > 0 && (
									<div
										className=""
										style={{
											display: "flex",
											flexDirection: "column",
											rowGap: "0.5rem",
										}}
									>
										<Label>Uploaded Files</Label>
										{attachments.map((file, index) => (
											<div
												key={index}
												className=""
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
													padding: "0.5rem",
													backgroundColor: "#F9FAFB",
													borderRadius: "0.25rem",
												}}
											>
												<span className="" style={{ fontSize: "0.875rem" }}>
													{file.name}
												</span>
												<Button
													type="button"
													variant="ghost"
													size="sm"
													onClick={() => removeAttachment(index)}
												>
													<X
														className=""
														style={{ height: "1rem", width: "1rem" }}
													/>
												</Button>
											</div>
										))}
									</div>
								)}
							</CardContent>
						</Card>

						{/* Contact Information */}
						<Card
							style={{
								padding: "2vh 2vw",
								border: "2px solid #44444422",
								borderRadius: "10px",
							}}
						>
							<CardHeader style={{ padding: "2vh 2vw 3vh 0" }}>
								<CardTitle style={{ fontSize: "1.7vw", fontWeight: "600" }}>
									Contact Information
								</CardTitle>
								<CardDescription>
									How should interested companies contact you?
								</CardDescription>
							</CardHeader>
							<CardContent
								className=""
								style={{
									display: "flex",
									flexDirection: "column",
									rowGap: "1rem",
								}}
							>
								<div
									className=""
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
										gap: "1rem",
									}}
								>
									<div
										className=""
										style={{
											display: "flex",
											flexDirection: "column",
											rowGap: "0.5rem",
										}}
									>
										<Label htmlFor="contactName">Contact Person</Label>
										<Input id="contactName" placeholder="John Doe" />
									</div>
									<div
										className=""
										style={{
											display: "flex",
											flexDirection: "column",
											rowGap: "0.5rem",
										}}
									>
										<Label htmlFor="contactEmail">Contact Email</Label>
										<Input
											id="contactEmail"
											type="email"
											placeholder="john@company.com"
										/>
									</div>
								</div>
								<div
									className=""
									style={{
										display: "flex",
										flexDirection: "column",
										rowGap: "0.5rem",
									}}
								>
									<Label htmlFor="contactPhone">Phone Number (Optional)</Label>
									<Input
										id="contactPhone"
										type="tel"
										placeholder="+1 (555) 123-4567"
									/>
								</div>
							</CardContent>
						</Card>

						{/* Submission */}
						<div
							className=""
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingTop: "1.5rem",
								borderTop: "1px solid #E5E7EB",
							}}
						>
							<Button
								type="button"
								variant="outline"
								onClick={() => router.back()}
							>
								Cancel
							</Button>
							<div
								className=""
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.75rem",
								}}
							>
								<Button type="button" variant="outline">
									Save as Draft
								</Button>
								<Button type="submit" disabled={isLoading} variant="secondary">
									{isLoading ? "Publishing..." : "Publish Tender"}
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
