import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/NavBar/Navbar';
import Login from './Component/Login & SignUp/Login';
import SignUp from './Component/Login & SignUp/SignUp';
import Todo from './Component/ToDoList/Todo'
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        
        <Routes>

          <Route path='/' 
          
          element={<ProtectedRoute Protect={true} Component={Home}/>
        
        }/>
        <Route path='/Todo' 
          
        element={<ProtectedRoute Protect={true} Component={Todo}/>
      
      }/>

      <Route path='/Login' 
          
      element={<ProtectedRoute Protect={false} Component={Login}/>
    
    }/>
      
    <Route path='/SignUp' 
          
      element={<ProtectedRoute Protect={false} Component={SignUp}/>
    
    }/>
      
          
          
      
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
