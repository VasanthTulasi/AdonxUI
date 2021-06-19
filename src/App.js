import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import MainFeature from './Components/MainFeature';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <MainFeature></MainFeature>
      <MainFeature flexDirection="flexreverse"></MainFeature>
      <MainFeature></MainFeature>
      <MainFeature flexDirection="flexreverse"></MainFeature>
      <MainFeature></MainFeature>
      <MainFeature flexDirection="flexreverse"></MainFeature>

    </div>
  );
}

export default App;
