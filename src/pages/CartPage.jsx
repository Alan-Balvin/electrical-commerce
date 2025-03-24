// CartPage.jsx
import { useCart } from "../context/CartContext";
import "./CartPage.css";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>{item.price} MXN</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="total-price">Total: {total} MXN</h2>
        </>
      )}
    </div>
  );
}

export default CartPage;
