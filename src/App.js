
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  HashRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{

    setAlert({
      msg:message,
      type:type

   
    })

    

    setTimeout(() => {
      
      setAlert(null);
    }, 2000);

  }

  const toggleMode = ()=> {

    if(mode=== 'light')
    {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode Enabled", "success");
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Enabled", "success");
    }
    }
  return (
    <>
    <Router>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3">

<Routes>
          <Route path="/about" element={<About/>}>
            
          </Route>
          
          <Route path="/" element={<TextForm heading="Enter Any Text " mode={mode} showAlert={showAlert}/>}>
          
          </Route>
        </Routes>
        
 
 
      </div>
       </Router>
      
       <footer > Devloped by Gulrez Eqbal </footer>
       
      
    </>
  );
}

export default App;
