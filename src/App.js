import React from "react";
import { Route, Link, Routes} from "react-router-dom"
import Home from "./Components/Home";
import Projetoped from "./Components/Projetoped";
import Calendario from "./Components/Calendario";
import Curriculo from "./Components/Curriculo";
import Contato from "./Components/Contato";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
    
    <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projetoped" element={<Projetoped />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

      </main>
      <Footer />
    </>
  );
}

export default App;
