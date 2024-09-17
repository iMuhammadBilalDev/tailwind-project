import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/home' element = {<Home />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
