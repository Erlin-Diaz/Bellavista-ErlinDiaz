import React from "react";
import './styles.css';

const Button = ({styles}) => {
  return (
    <button className="button-styles"
	style={{...styles}}>
      Aquí
    </button>
  );
};

export default Button;
