import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Materials from "./pages/Materials";
import Requests from "./pages/Requests";
import Suppliers from "./pages/Suppliers";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Layout />

        <div className="flex-1 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/suppliers" element={<Suppliers />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;