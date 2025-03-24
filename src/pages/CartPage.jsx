import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  
  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? <p>El carrito está vacío</p> : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} MXN
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;