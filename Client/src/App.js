import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Register from './components/register';
import Login from './components/login';
import About from './components/about';
import Notepost from './components/notepost';
import SellBook from './components/sellbook';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from'react-router-dom';

const App=()=>{
  return (
    <>
      <Router>
    <Navbar />
       <Routes>
        <Route exact path="/" element={<Home/>}></Route>
         <Route exact path="/about" element={<About/>}></Route>
         <Route exact path = "/login" element = {<Login/>}></Route>
         <Route exact path ="/register" element = {<Register/>}></Route>
         <Route exact path = "/contact" element = {<Contact/>}></Route>
         <Route exact path = "/notepost" element = {<Notepost/>}></Route>
         <Route exact path = "/sellbook" element = {<SellBook/>}></Route>
       </Routes>
      </Router>
    </>
  );
}

export default App;
