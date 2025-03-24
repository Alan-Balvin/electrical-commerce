import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../aws/config"; // Importamos la configuración

//json temporal
import { useCart } from '../context/CartContext';
import lights from '../data/lights.json';
import './HomePage.css'; // Importamos el archivo CSS

function HomePage() {
  //API false:
  const { addToCart } = useCart();
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Making API request..."); // Log antes de hacer la solicitud
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY, // Usamos la clave desde el archivo de configuración
          },
          body: JSON.stringify({ message: "Hola desde React" }),
        });

        console.log("Response status:", response.status); // Log del estado de la respuesta

        if (!response.ok) {
          // Si la respuesta no es OK (código 200-299), lanzamos un error
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response Data:", data); // Log del contenido de la respuesta

        // Parseamos el cuerpo de la respuesta JSON (si es necesario)
        const parsedBody = JSON.parse(data.body);
        setMessage(parsedBody.message); // Establecemos el mensaje recibido
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Failed to load API response.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to the Home Page</h1>
      <p className="api-message">API Response: {message}</p>

      <h2 className="products-title">Modern Lights</h2>
      <div className="products">
        {lights.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">{item.price} MXN</p>
            <button className="add-to-cart-button" onClick={() => addToCart(item)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
