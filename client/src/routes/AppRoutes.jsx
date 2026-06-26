import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import CreateClass from "../pages/admin/CreateClass";
import Registrations from "../pages/admin/Registration";

import Classes from "../pages/student/Classes";
import Register from "../pages/student/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/create-class" element={<CreateClass />} />
        <Route path="/admin/registrations" element={<Registrations />} />

        {/* Student */}
        <Route path="/" element={<Classes />} />
        <Route path="/register/:id" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;