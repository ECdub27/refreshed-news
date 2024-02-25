import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
import {useState, useEffect} from 'react';
import NewsArticle from './Components/Home/newsArticle';
import { useGetPokemonByNameQuery } from './store/newsApiSlice';
// MUI themee provider
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import  Box  from "@mui/material/Box";

import Footer from './Components/Footer/footer';
import TechnologySection from './Components/Technology/techSection';
import PoliticsSection from './Components/Politics/politicsSection';



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

const {data, error, isLoading } = useGetPokemonByNameQuery('eevee')
 
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <NavBar className='app-nav-bar' positon='sticky' /> 
      <header className="App-header">
        <HeroSlide />
      </header>
      
      
      <main>
     <NewsArticle/>
    

     <div className="Business.Section.div">
     <div>
        <h3>Whos that pokemon!!</h3>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
          <p>{data.species.name}</p> 
          <img src={data.sprites.front_shiny} alt={data.species.name}/>  
          </>
        ) : null
      }
        
         </div>
     </div>
     <div className='Technology.Section.div'>
      <Container>
        <TechnologySection />
        </Container>
     </div>
     <div className='Politics.Section.div'>
      <PoliticsSection />
     </div>
  </main>
      <div className='footer-container'>
        Refreshed news
       <Footer />
      </div>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
