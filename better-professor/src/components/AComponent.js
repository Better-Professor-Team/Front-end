// This is a protected component, meaning you will have to log in before this will display.

import React from "react";
import UserContainerList from "./UserContainerList";

const AComponent = () => {

	return (
		<div className="a-component">
			<h1>A Component</h1>
			<UserContainerList />
		</div>
	);
};

export default AComponent;