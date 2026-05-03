import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;