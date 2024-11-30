import React from 'react';
import {Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Books from './components/Books';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './contex/AuthProvider';

function App() {
  const [authUser, setAuthUser]= useAuth();
  console.log(authUser)
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={ authUser?<Books /> : <Navigate to="/login" /> } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App