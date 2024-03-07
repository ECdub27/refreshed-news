
import './App.css';
import NavBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
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
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
       <div className='search-bar'>
      <Box >
      <NavBar className='app-nav-bar' positon='sticky' /> 
      </Box>
      </div>
      <Box sx={{borderColor:'#E0607E'}}>
        <div className='flex-container1'>
    <header className="App-header">
      <div className='hero-image'>
      <h1 className='hero-title'>A Refreshed Look from the Norm</h1>
        <div className='hero-text'>
         
        
        </div>
        </div>
        <ul>
          <li><a href='#headlines'>Top Headlines 🗞</a></li>
          <li><a href='#business'>Business Sources 📈 </a></li>
          <li><a href='#polly'>Politics 👨‍💼 👩‍💼 </a></li>
          <li><a href='#tech'>Technology 💻 </a></li>
        </ul>
        <hr className='divider-1'/>
      </header>
     
      </div>
      </Box>
    <main>
  <div className='top-headlines-div-flex-container'>
    <div className='top-headlines-content'>
    <HeroSlide id='headlines' />
    <div className='business-list-articles'>
    <NewsArticle id='business'/>
    </div>
    </div>
    </div>
    </main>
    
    <div className="Business.Section.div">
    
<div>
<hr className='divider-3'/>
  
    
    
    </div>
  
</div>


<div className='Technology.Section.div'>
 <Container>
   <TechnologySection id='tech' />
   </Container>
</div>

<div className='Politics.Section.div'>
<hr/>

 <PoliticsSection id='polly' />
 
</div>

 <div className='footer-container'>
  
  <Footer />
 </div>
 
    

</ThemeProvider>

 </div>
   
  );
}

export default App;
