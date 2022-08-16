import React, { useContext } from "react";
import { Link } from "react-router-dom";
/* import Button from "../Button"; */
import CartWidget from "../CartWidget";
import { UserSettings } from "../Context/UserSettings";
import SelectDarkMode from "../SelectDarkMode";
import './styles.css';


export default function NavBar({opcionAdicional}) {

	const {darkMode} = useContext(UserSettings);

	return (
		<ul className="navbar container-fluid fixed-top m-0 p-0 " style={{
			backgroundColor: darkMode ? '#333':"#4CAF50"}}>
			<li><Link to="/" className="active" href="#home" style={{
			backgroundColor: darkMode ? "#4CAF50" : '#333'}}>Home</Link></li>
			<li><Link to="/category/men's clothing" >For Men's</Link></li>
			<li><Link to="/category/women's clothing" >For Women's</Link></li>
			<li><Link to="/category/electronics" >Electrónica</Link></li>
			<li><Link to="/category/jewelery" >Joyería</Link></li>
			<CartWidget/>
			<SelectDarkMode/>
		</ul>
	)
}