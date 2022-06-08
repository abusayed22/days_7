import { Routes, Route } from "react-router-dom";
import Read from "./components/pages/Read";
import Home from "./components/pages/Home";
import Header from "./components/partials/Header";
import Add from "./components/pages/Add";
import Single from "./components/pages/Single";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/add" element={<Add />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
