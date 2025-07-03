import Link from "next/link";
import { Menu } from "lucide-react";
// import { useState } from "react"

export default function Header({ path }: { path: string[] }) {
	let absolutePath = "/dashboard";
	return (
		<>
			<header className="main-header">
				<button
					className="btn btn-ghost"
					style={{ display: "none" }}
					id="mobile-menu-btn"
				>
					<Menu style={{ height: "20px", width: "20px" }} />
				</button>
				<div
					style={{
						height: "1px",
						backgroundColor: "#e5e7eb",
						margin: "0 0.5rem",
					}}
				></div>
				<nav className="breadcrumb">
					{path.map((val, ind) => (
						<div key={ind}>
							<div className="hidden">
								{(path[ind] = val || "dashboard")}
								{(absolutePath = "")}
								{path.map((newVal, newInd) => (
									<div key={newInd}>
										<div style={{ display: "none" }}>
											{newVal}
											{newInd <= ind
												? (absolutePath += path[newInd] + "/")
												: ""}
										</div>
									</div>
								))}
							</div>
							<Link href={`/${absolutePath}`}>{path[ind]}</Link>
							<span className="breadcrumb-separator">/</span>
						</div>
					))}
					{path.length == 1 && <span>Overview</span>}
				</nav>
			</header>
		</>
	);
}
