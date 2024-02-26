import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Designs from './components/Designs';
import Error from './components/Error';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs/>} />
        <Route path="*" element={[<Navigate key="redirect" to="/not-found" />, <Error key="error" />,]}/>
      </Routes>
    </Router>
  );
}

export default App;
