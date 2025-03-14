import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../aws/config"; // Importamos la configuración

function HomePage() {
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
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default HomePage;
