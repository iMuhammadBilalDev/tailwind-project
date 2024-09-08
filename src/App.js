import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element = {<SignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
