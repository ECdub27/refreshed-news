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



const theme = createTheme({
  palette: {
    primary:{
      main: '#0A0F25',
      light: '#3B3F50',
      dark: '#070A19',
    },
    secondary:{
      main: '#5F7367',
      light: '#7F8F85',
      dark: '#425048'
    }
  }
});





function App() {
  // make nav bar sticky

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <NavBar className='app-nav-bar' /> 
      <header className="App-header">
        <HeroSlide />
      </header>
      <main>
     <NewsArticle/>
      <div>
       <BusinessSection />
       </div>
      <div>Technology</div>


      <div>Politics</div>


      
      
      </main>
      <div className='footer-container'>
      <footer className='app-footber'>
        Refreshed news
       <ul className='footer-list-el'>
        <li className='app-footer-li-1'>About us</li>
        <li className='app-footer-li-2'>Licensing</li>
        <li className='app-footer-li-3'>Advertise</li>
        <li className='app-footer-li-4'>Contact Us</li>
        <li className='app-footer-li-5'>Terms of Service</li>
        <li className='app-footer-li-6'>Privacy Policy</li>
       </ul>
      </footer>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
