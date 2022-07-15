import React from "react";
import Button from "../Button";
import CartWidget from "../CartWidget";
import './styles.css';


export default function NavBar({ciertaVariable, opcion}) {

	// 	console.log(ciertaVariable);

	return (
		<ul>
			<li><a className="active" href="#home">Home</a></li>
			<li><a href="#nosotros">Nosotros</a></li>
			<li><a href="#productos">Productos</a></li>
			<li><a href={`#${opcion}`}>{opcion}</a></li>
			<li><a href="#contact">Contacto</a></li>
			<Button styles={{
				padding: 10,
				margin: 6
				}}
			/>
			<CartWidget/>
			
		</ul>
	)
}