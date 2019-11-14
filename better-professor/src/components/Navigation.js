import React from "react";
import './Navigation.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	return (
		<div className="navigation">
			<NavLink to="/Login">Login</NavLink>
			<NavLink to='/AComponent'>A Component</NavLink>
		</div>
	);
};

export default Navigation;