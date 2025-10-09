import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import AuthLayout from "./components/AuthLayout";
import EventList from "./components/EventList/EventList.jsx";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard.jsx";
//import EventsPage from './pages/EventsPage';
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Routes>
                  <Route index element={<div>Dashboard Admin</div>} />
                  <Route path="events/" element={<EventList />} />
                </Routes>
              </AdminLayout>
            }
          />
          <Route
            path="/auth/*"
            element={
              <AuthLayout>
                <Routes>
                  <Route index element={<div>Login/Register</div>} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Routes>
              </AuthLayout>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
