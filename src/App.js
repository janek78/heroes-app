import React from 'react';
import './App.scss';
import {Heroes} from './components/Heroes';
import {Navigation} from './components/Navigation';
import {Search} from './components/Search';
import {DetailsHero} from './components/DetailsHero';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
        <Router>
          <div className='all__content'>
            <Navigation/>
            <main>
              <div className='container'>
                <Routes>
                  <Route path='*' element={<h1>You need to give character name</h1>} />
                  <Route path='/' element={<Heroes/>}/>
                  <Route path='/search/:name' element={<Search/>}/>
                  <Route path='/hero/:id' element={<DetailsHero/>}/>
                </Routes>
              </div>
            </main>
            <footer>
              <div className='container'>
                <p>Copyright &copy; 2022 All Rights Reserved</p>
              </div>
            </footer>
          </div>
        </Router>
  );
}

export default App;
