import React from "react";
import ordenGenerada from "../../services/generarOrden";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { ShopData } from "../Context/Shop";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [repiteEmail, setRepiteEmail] = useState("");
  const navigate = useNavigate();

  const { cart, clearCart, total } = useContext(ShopData);

  const gestionCompra = async (e) => {
    e.preventDefault();
    const esIgualEmail = repiteEmail === email;
    const campoVacio = name === "" || email === "" || repiteEmail === "";
    if (esIgualEmail && !campoVacio) {
      const order = ordenGenerada(name, email, cart, total);

      const docRef = await addDoc(collection(database, "orders"), order);
      console.log("Document written with ID: ", docRef.id);
      console.log(
        "🚀 ~ file: Cart.jsx ~ line 13 ~ gestionCompra ~ order",
        order
      );

      //Actualizamos stock
      for (const item of cart) {
        const docRef = doc(database, "productos", item.id);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productoOriginal = { id: docSnap.id, ...docSnap.data() };
          const productoActualizar = doc(database, "productos", item.id);

          await updateDoc(productoActualizar, {
            stock: productoOriginal.stock - item.cantidad,
          });
        } else {
          console.log("No such document!");
        }
      }
      Swal.fire("N° de orden generada:", docRef.id, "success").then(() => {
		clearCart();
		navigate('/');
	  })

    } else {
      Swal.fire("Algun campo es inválido!!!");
    }
  };

  return (
    <div className="container formStyles p-3 rounded border border-3 border-success">
      <form className="row g-3" onSubmit={gestionCompra}>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Primer Nombre"
            aria-label="Primer Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Segundo nombre"
            aria-label="Segundo nombre"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            id="inputEmail1"
            placeholder="Email"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            id="inputEmail2"
            placeholder="Repetir email"
            aria-label="Repetir email"
            value={repiteEmail}
            onChange={(e) => setRepiteEmail(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Ciudad
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Acepta terminos y condiciones.
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Confirmar compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
