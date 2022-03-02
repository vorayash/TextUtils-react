import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002458";
      showAlert("Dark mode has been enabled successfuly", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled successfuly", "success");
    }
  }


  const [alert, setAlert] = useState(null);
  const showAlert = (message, alertType) => {
      setAlert({
        msg: message,
        type: alertType
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtility" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>

          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/TextUtils-react" element={<TextForm mode={mode} showAlert={showAlert} />}/>
          
          <Route exact path="/aboutUs" element={<AboutUs mode={mode} />}>

          </Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
