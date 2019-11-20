// This is our navigation bar. It displays the links to navigate through our site.

import React from "react";
import './Navigation.css'
import S from "styled-components";
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {

	return (
		<StyledHeader>
		<StyledNavigationContainer>
			<StyledNavigation>
				<StyledUL>
					<StyledLi>
						<StyledLink to="/">Home</StyledLink>
					</StyledLi>
					<StyledLi>
						<StyledLink to='/AComponent'>A Component</StyledLink>
					</StyledLi>
                    <StyledLi>
						<StyledLink to='/add-user'>Add Student</StyledLink>
					</StyledLi>
					<StyledLi>
						<StyledLink to="/Login">Login</StyledLink>
					</StyledLi>
					<StyledLi>
						<StyledLink secondary="true" to="/Signup">Get Started</StyledLink>
					</StyledLi>
				</StyledUL>
			</StyledNavigation>
		</StyledNavigationContainer>
		</StyledHeader>
	);
};

export default Navigation;

const StyledHeader = S.header`
    width: 100%;
	// padding-top: 2rem;
	margin: 0;
    padding-bottom: 2rem;
    // position: fixed;
    top: 0;
`;

const StyledNavigationContainer = S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
	margin: 0 auto;
	background-color: #a2cf88;
	width: 62%;
	border-radius: 25px;
`;
const StyledNavigation = S.nav`
    display: flex;
    align-items: center;
`;

const StyledUL = S.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const StyledLi = S.li`
    list-style: none;
    margin: 0 5px;
    display: flex;
    align-items: center;
`;

const StyledLink = S(Link)`
    display: flex;
    height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    align-items: center;
    font-size: 16px;
    color: ${props => props.secondary ? '#000' : '#000'};
    height: 2rem;
    padding: 10px 24px;
    border-radius: 20px;
    text-decoration: none;  
    background-color: ${props => props.secondary ? '#fff' : 'transparent'}
    transition: all ease-in-out 120ms;
    :hover {
        background-color: ${props => props.secondary ? '#9d66ff' : 'rgba(194, 194, 194, 0.4)'}
    }
    :active {
        box-shadow: 0px 2px 5px 0px #464545;
        transform: scale(1.1);
    }
`;