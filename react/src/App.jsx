import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard.jsx';
//import EventsPage from './pages/EventsPage';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/auth/login" element={<Login />}/>
          <Route path="/auth/register" element={<Register />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App