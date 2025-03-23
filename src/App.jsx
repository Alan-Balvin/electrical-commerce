import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar"


function App() {
  return (
<>
      <Navbar/>
    <Routes>
     
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
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