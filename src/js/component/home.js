import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import card from "./card";
import jumbotron from "./jumbotron";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
		</div>
	);
}
