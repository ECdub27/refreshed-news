import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
import {useState, useEffect} from 'react';
import NewsArticle from './Components/Home/newsArticle';
import BusinessSection from './Components/Business/businessSection';
// MUI themee provider
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';


let theme = createTheme({
  palette: {
    primary:{
      main: green
    },
    secondary:{
      main: purple
    }
  }
});



theme =  createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    }
  }
});

function App() {
  // make nav bar sticky

  return (
    <div className="App">
    <ThemeProvider>
      <NavBar className='app-nav-bar' /> 
      <header className="App-header">
        <HeroSlide />
      </header>
      <main>
     <NewsArticle/>
      <div>Business</div>
       <BusinessSection />
      <div>Technology</div>


      <div>Politics</div>


      
      
      </main>
      
      <footer>
        Refreshed news
       <ul className='footer-list-el'>
        <li>About us</li>
        <li>Licensing</li>
        <li>Advertise</li>
        <li>Contact Us</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
       </ul>
      </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
