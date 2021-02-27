import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import CardContainer from "./cardcontainer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
		</div>
	);
}
