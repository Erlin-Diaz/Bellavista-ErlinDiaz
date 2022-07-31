import React from "react";
import { Link } from "react-router-dom";
/* import Button from "../Button"; */
import CartWidget from "../CartWidget";
import './styles.css';


export default function NavBar({opcionAdicional}) {



	return (
		<ul className="navbar container-fluid fixed-top m-0 p-0 ">
			<li><Link to="/" className="active" href="#home">Home</Link></li>
			<li><Link to="/category/men's clothing">For Men's</Link></li>
			<li><Link to="/category/women's clothing">For Women's</Link></li>
			<li><Link to="/category/electronics">Electrónica</Link></li>
			<li><Link to="/category/jewelery">Joyería</Link></li>
			<CartWidget/>
			
		</ul>
	)
}