import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";


function App() {
  return (
<>
<CartProvider>

      <Navbar/>
    <Routes>
     
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/CartPage" element={<CartPage/>}  ></Route>
    </Routes>
</CartProvider>
</>
  );
}

export default App;
/*
fetch(`${API_URL}`)
  .then((res) => res.json())
  .then((data) => console.log(data));

  aquí me quedé
*/