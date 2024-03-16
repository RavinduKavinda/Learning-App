import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services/>
    </div>
  );
}

export default App;
