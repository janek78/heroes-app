import React from 'react';
import './App.scss';
import {Heroes} from './components/Heroes';
import {Navigation} from './components/Navigation';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
          <Navigation/>
          <main>
            <div className='container'>
              <Routes>
                <Route path="/" element={<Heroes/>}/>
                {/*<Route path='/search/:name' element={<Search/>}/>*/}
              </Routes>
            </div>
          </main>
          <footer>
            <div className='container footer'>
              <p>  Copyright  &copy; 2022 All Rights Reserved</p>
            </div>
          </footer>

        </Router>
      </>
  );
}

export default App;
