import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout.jsx";
import AdminLayout from "./components/Layouts/AdminLayout.jsx";
import AuthLayout from "./components/Layouts/AuthLayout.jsx";
import EventList from "./components/Event/EventList/EventList.jsx";
import HomePage from "./pages/HomePage";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AllUsersList from "./components/Users/AllUsersList/AlllUsersList.jsx";
import PickEvent from "./components/Event/PickEvent.jsx";
import Dashboard from "./pages/Dashboard";
import EditEvent from "./components/Event/EditEvent.jsx";
import ShopManagement from "./components/Shop/ShopManagement.jsx";
import EditEventLayout from "./components/Layouts/EditEventLayout.jsx";
import EventGroups from "./components/Groups/EventGroups.jsx"

import "./App.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Routes>
                  <Route path="event/*" element={
                      <Routes>
                        <Route path="pickevent/" element={<PickEvent />} />
                        <Route path="manageevent/*" element={
                            <EditEventLayout>
                              <Routes>
                                <Route path="editevent/" element={<EditEvent />}/>
                                <Route path="manageshop/" element={<ShopManagement />}/>
                                <Route path="managegroups/" element={<EventGroups/>}/>
                              </Routes>
                            </EditEventLayout>
                          }
                        />

                      </Routes>
                    }
                  />
                </Routes>
              </AdminLayout>
            }
          />
          <Route path="admin/events/" element={<EventList />} />
          <Route
            path="admin/users/*"
            element={
              <Routes>
                <Route path="alluserslist" element={<AllUsersList />} />
              </Routes>
            }
          />
          <Route
            path="/auth/*"
            element={
              <AuthLayout>
                <Routes>
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
