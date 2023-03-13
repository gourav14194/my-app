import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#444c7e";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextEditor-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextEditor-Light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
        <Routes>
            <Route path="/about" element={<About />} />
              
            

            <Route path="/" element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to Analyze below"
                mode={mode}/>} />
            
      
      </Routes>
     </div>
      </Router>
      
    </>
  );
}

export default App;
