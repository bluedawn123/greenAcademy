import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Nav from "./Nav";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn}) => {
  return (
    <>
    {isLoggedIn && <Nav/>}
    <Routes>
      { isLoggedIn ? 
      <>
      <Route path="/" element={<Home/>} /> 
      <Route path="/profile" element={<Profile/>} /> 
      </>
      : 
      <Route path="/" element={<Auth/>} /> 
      }
    </Routes>
    </>
  )
}

export default AppRouter;