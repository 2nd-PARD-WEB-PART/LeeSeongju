import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './Page.js';
import Home from './Home.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <TransitionGroup>
              <CSSTransition classNames="fade" timeout={500}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/page' element={<Page />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
