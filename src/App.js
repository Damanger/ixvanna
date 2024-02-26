import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Designs from './components/Designs';
import Error from './components/Error';
import Cargando from './components/Cargando';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <Router>
      {isLoading ? (
        <Cargando imagen="./ixvanna.jpeg" />
      ) : (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs/>} />
          <Route path="*" element={[<Navigate key="redirect" to="/not-found" />, <Error key="error" />,]}/>
        </Routes>
      </>
      )}
    </Router>
  );
}

export default App;
