import React from "react";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container" style={{ margin: "auto" }}>
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
