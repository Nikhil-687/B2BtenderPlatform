import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TenderHub - B2B Tender Management Platform",
	description: "Manage tenders, connect with companies, and grow your business",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* <Nav></Nav> */}
				{children}
			</body>
		</html>
	);
}
