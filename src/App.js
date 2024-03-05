import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
import {useState, useEffect} from 'react';
import NewsArticle from './Components/Home/newsArticle';
import { useGetPokemonByNameQuery } from './store/newsApiSlice';
import Button from '@mui/material/Button';
// MUI themee provider
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import  Box  from "@mui/material/Box";
import Footer from './Components/Footer/footer';
import TechnologySection from './Components/Technology/techSection';
import PoliticsSection from './Components/Politics/politicsSection';

// see if you can get business sources to the right sidebar 

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
    },
   diverStyle:{ 
   py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
   }
  }
});





function App() {
  // make nav bar sticky

const {data, error, isLoading } = useGetPokemonByNameQuery('eevee')
 
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        <div className='flex-container1'>
      <div className='search-bar'>
      <Box >
      <NavBar className='app-nav-bar' positon='sticky' /> 
      </Box>
      </div>
    
      
      <header className="App-header">
      <div className='hero-image'>
      <h1 className='hero-title'>A Refreshed Look from the Norm</h1>
        <div className='hero-text'>
         
        
        </div>
        </div>
        <ul>
          <li>Top Headlines 🗞</li>
          <li>Business Sources 📈 </li>
          <li>Politics 👨‍💼 👩‍💼</li>
          <li>Technology 💻 </li>
        </ul>
        <hr className='divider-1'/>
      </header>
     
      </div>
    <main>
  <div className='top-headlines-div'>
    <HeroSlide />
    <NewsArticle/>
    </div>
    </main>
    <div className="Business.Section.div">
<div>
<hr className='divider-3'/>
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


<hr className='divider-3'/>

<div className='Technology.Section.div'>
 <Container>
   <TechnologySection />
   </Container>
</div>

<div className='Politics.Section.div'>
<hr/>

 <PoliticsSection />
 
</div>


<hr className='divider-4'/>


 <div className='footer-container'>
   Refreshed news
  <Footer />
 </div>
 
    

</ThemeProvider>

 </div>
   
  );
}

export default App;
