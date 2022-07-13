import './App.css';
import NavBar from './components/NavBar';

let temp = 20;
const spanStyles = {
  fontSize: 24,
  margin: 12,

}

const imagen = "https://home.ripley.com.pe/Attachment/WOP_5/2020286239596/2020286239596_2.jpg";

function App() {
  return (
    <>
    <NavBar/>
    <div className="contenedor">
      <button style={{
        width: 100,
        borderRadius: 10,
        backgroundColor: 'blue',
      }}
      >Aquí</button>

      {/* Elementos autocloseables */}
      <input placeholder='Ingresar datos' className='app-input'/>
      <img src ={imagen} className="img" alt='balón'/>
      <hr/>

      <span style={spanStyles}>Valor de variable: {temp}</span>
    </div>
    </>
  );
}

export default App;
