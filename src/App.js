import React from 'react';
import Main from './components/Main.js'
import AdminDash from './components/AdminDash.js'


import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
   
  
    
    
    <BrowserRouter>
   
        <div>
       
        <Route path="/AdminDash" component={AdminDash}/>
        <Route path="/Main" component={Main}/>
     
        </div>
     
        </BrowserRouter>
  
  );
}

export default App;
