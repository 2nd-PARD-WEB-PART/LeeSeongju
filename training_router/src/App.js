import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Page from './Page.js';
import Home from './Home.js';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/page' element={<Page/>}> go</Route>
          <Route path='/' element={<Home/>}>home</Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App
