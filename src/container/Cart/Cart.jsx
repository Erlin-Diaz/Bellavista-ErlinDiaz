import React, { useContext } from "react";
import { ShopData } from "../../components/Context/Shop";
import "./styles.css";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart, removeItem, clearCart, total} = useContext(ShopData);
  const navigate = useNavigate();

  const gestionCompra=()=>{
    navigate('/checkout');
  }

  return (
    <div className="container table-responsive cartStyles">
      {
        cart.length ?
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {cart.map((producto) => {
            return (
              <tr className="align-middle" key={producto.id}>
                <td>
                  {" "}
                  <img
                    src={producto.imagen}
                    className="img-thumbnail stylesImg"
                    alt={producto.nombre}
                  />
                </td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>S/. {producto.precio}</td>
                <td>S/. {producto.cantidad * producto.precio}</td>
                <td>
                  <button
                    onClick={() => removeItem(producto.id)}
                    type="button"
                    className="btn btn-danger "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="stylesFoot">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={clearCart}
            >
              Limpiar carrito
            </button>
          </td>
          <td></td>
          <td></td>
          <td colspan="2"> Total: S/. {total}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={gestionCompra}
            >
              Generar compra
            </button>
          </td>
        </tfoot>
      </table>
      :
      <h3>Carrito Vacío...!!!</h3>
      }
    </div>
  );
};

export default Cart;
