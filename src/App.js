import React from 'react';
import './App.scss';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import PagesNotFound from './Components/PagesNotFound/PagesNotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
 function App() {
  return (
    <div className="App">
<Router>
  <Header/>
  <div className='container'>
  <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/movie/:imdbID' Component={MovieDetail}/>
    <Route Component={PagesNotFound}/>
  </Routes>
  </div>
  <Footer/>
</Router>
    </div>
  );
}

export default App;
