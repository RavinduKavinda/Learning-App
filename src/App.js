import './App.css';
import Goals from './Components/Goals/Goals';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Whyus from './Components/Whyus/Whyus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services/>
      <Whyus />
      <Goals />
    </div>
  );
}

export default App;
