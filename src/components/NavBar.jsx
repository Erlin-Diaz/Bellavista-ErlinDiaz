import React from "react";
import './NavBar.css';

export default function NavBar() {
	return (
		<ul>
			<li><a className="active" href="#home">Home</a></li>
			<li><a href="#nosotros">Nosotros</a></li>
			<li><a href="#productos">Productos</a></li>
			<li><a href="#contact">Contacto</a></li>
		</ul>
	)
}