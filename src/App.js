import { Routes, Route } from "react-router-dom";
import Read from "./components/pages/Read";
import Home from "./components/pages/Home";
import Header from "./components/partials/Header";
import Add from "./components/pages/Add";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
