import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500">
      <h1 className="text-white text-3xl mb-6">Welcome User</h1>
      <button
        onClick={handleLogout}
        className="border-2 bg-gray-900 text-white w-32 rounded-md py-2 hover:bg-transparent hover:text-gray-600 font-semibold"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
