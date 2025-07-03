"use client"

import Header from "./header";
import type React from "react";
import AppSidebar from "@/components/app-sidebar";
import Child from "@/app/dashboard/Child";
import { companies } from "./companies/page";

export default function DashboardLayout() {
	let user = {
		userName: "Nikhil",
	};
	return (
		<div style={{ display: "flex", minHeight: "100vh", width: "99vw" }}>
			<div style={{ flexGrow: "0", width: "20vw" }}>
				<AppSidebar companys={[companies[0], companies[1]]}/>
			</div>
			<div
				className="main-content"
				style={{ flexGrow: "1", width: "80vw", margin: "auto" }}
			>
				<Header path={["dashboard"]}></Header>
				<div className="main-body" style={{ padding: "0 5vw 0 5vw" }}>
					<Child usr={user} />
				</div>
			</div>
		</div>
	);
}
