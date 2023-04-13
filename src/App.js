import './App.css';
import About from './views/About';
import Home from './views/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  

  return (
    
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
    </Router>
    
  );
}


export default App;
