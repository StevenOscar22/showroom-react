import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import ChevyHome from "./pages/chevy-page";
import NovaHome from "./pages/nova-coupe-page";
import ImpalaHome from "./pages/impala-page";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChevyHome />} />
        <Route path="/nova-coupe" element={<NovaHome />} />
        <Route path="/impala-sport" element={<ImpalaHome />} />
        <Route path="/chevy-corvette" element={<ChevyHome />} />
      </Routes>
    </Router>
  );


};

export default App;
