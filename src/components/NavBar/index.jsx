import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
			backgroundColor: darkMode ? "#4CAF50" : '#333'}}>BellaVista</Link></li>
			<li><Link to="/categoria/Hombre" >Hombres</Link></li>
			<li><Link to="/categoria/Mujer" >Mujeres</Link></li>
			<li><Link to="/categoria/Niños" >Niños</Link></li>
			<li><Link to="/categoria/Niñas" >Niñas</Link></li>
			<CartWidget/>
			<SelectDarkMode/>
		</ul>
	)
}