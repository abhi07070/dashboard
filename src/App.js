import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EmployeePage from "./Pages/EmployeePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
      </Routes>
    </>
  );
}

export default App;
