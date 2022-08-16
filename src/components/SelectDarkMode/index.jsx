import React, { useContext } from 'react'
import { UserSettings } from '../Context/UserSettings';

const SelectDarkMode = () => {

	const {darkMode, setDarkMode}= useContext(UserSettings);

	const activarDarkMode = (e)=>{		
		if(e.target.value === "Light") setDarkMode(false);
		else setDarkMode(true);
	}

  return (
	<>
		<label style={{color: darkMode ? "#4CAF50":"black"}}>Tema:</label>
		<select name="cars" id="cars" onChange={activarDarkMode}>
			<option value="Light">Light</option>
			<option value="Dark">Dark</option>
		</select>
	</>
  )
}

export default SelectDarkMode