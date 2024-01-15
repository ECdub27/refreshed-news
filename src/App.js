import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
function App() {
  // make nav bar sticky
  return (
    <div className="App">
    
      <NavBar className='app-nav-bar' /> 
      <header className="App-header">
        <HeroSlide />
      </header>

      <main>

      </main>
    </div>
  );
}

export default App;
