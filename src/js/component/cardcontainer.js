import React from "react";
import card from "./card";

export const CardContainer = () => {
	return (
		<div className="row">
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
		</div>
	);
};
export default CardContainer;
