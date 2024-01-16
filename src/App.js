import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
import {useState, useEffect} from 'react';
import NewsArticle from './Components/Home/newsArticle';

function App() {
  // make nav bar sticky

  return (
    <div className="App">
    
      <NavBar className='app-nav-bar' /> 
      <header className="App-header">
        <HeroSlide />
      </header>
     <NewsArticle />
      <div>Business</div>

      <div>Technology</div>


      <div>Politics</div>


      
      
      
      
      <footer>
        Refreshed news
       <ul>
        <li>About us</li>
        <li>Licensing</li>
        <li>Advertise</li>
        <li>Contact Us</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
       </ul>
      </footer>
    </div>
  );
}

export default App;
