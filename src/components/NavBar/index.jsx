import React from "react";
/* import Button from "../Button"; */
import CartWidget from "../CartWidget";
import './styles.css';


export default function NavBar({opcionAdicional}) {



	return (
		<ul className="navbar container-fluid fixed-top m-0 p-0 ">
			<li><a className="active" href="#home">Home</a></li>
			<li><a href="#nosotros">Nosotros</a></li>
			<li><a href="#productos">Productos</a></li>
			<li><a href={`#${opcionAdicional}`}>{opcionAdicional}</a></li>
			<li><a href="#contact">Contacto</a></li>
			<CartWidget/>
			
		</ul>
	)
}