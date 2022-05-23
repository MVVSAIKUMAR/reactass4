import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home';
import Students from './components/students';
import Contact from './components/contact';

function App() {
  return (
     <BrowserRouter>
      <div id='navBar'>
          <div><button><Link to="/">Home</Link> </button></div>
          <div><button><Link to={'/students'}>Student</Link> </button></div>
          <div><button><Link to={'/contact'}>Contact Us</Link> </button></div>
      </div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/students" element={<Students />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;