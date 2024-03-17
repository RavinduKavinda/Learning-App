import './App.css';
import Contact from './Components/Contact/Contact';
import Feedback from './Components/Feedback/Feedback';
import Goals from './Components/Goals/Goals';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Whyus from './Components/Whyus/Whyus';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services/>
      <Whyus />
      <Goals />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
