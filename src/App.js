import  Opportunities  from './Pages/GetOpportunities';
import './App.css';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Pages/Login'
import Logout from './Pages/Logout'

function App (){
  const { isAuthenticated } = useAuth0 ();
  
  return (
    <div className='container'>
        {!isAuthenticated ? 
        (<><Login className='btn'/></>):
        (
        <>
        <Logout />
        <Opportunities />
        </>)
      }
    </div>
  );
}


export default App;



/*

function App (){
  const { isAuthenticated } = useAuth0 ();
  
  return (
    <div className='container'>
        {!isAuthenticated ? 
        (<><Login /></>):
        (
        <>
        <Logout />
        <Opportunities />
        </>)
      }
    </div>
  );
}



function App (){
  
  return (
    <div className='container'>
        <>
        <Login />
        <Logout />
        <Opportunities />
        </>
      
    </div>
  );
}



*/