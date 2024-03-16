import './App.css';
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
    </div>
  );
}

export default App;
