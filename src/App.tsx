import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthorizhedPage from './components/AuthorizhedPage/AuthorizhedPage'
import HomePage from './components/HomePage/HomePage'
import Layout from './components/Layout/Layout'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'

import './App.css';
import GuestPage from './components/GuestPage/GuestPage'

function App() {


  return (

    
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main" element={<AuthorizhedPage />} />
            <Route path="/user/:name/details" element={<GuestPage />} />


      </Route>
    </Routes>
    </div>
  )
}

export default App