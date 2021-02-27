import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import CardContainer from "./cardcontainer";
import Jumbotron from "./jumbotron";

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
