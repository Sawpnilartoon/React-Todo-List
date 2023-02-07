import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/NavBar/Navbar';
import Login from './Component/Login & SignUp/Login';
import SignUp from './Component/Login & SignUp/SignUp';
import Todo from './Component/ToDoList/Todo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Todo' element={<Todo/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
