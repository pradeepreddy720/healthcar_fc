
import './App.css';
import { AppRoutes } from './routes/route';
import Login from "./pages/login";
import Register from "./pages/register";
import Forget from "./pages/Profile/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppRoutes />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
