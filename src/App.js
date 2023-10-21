import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Services from './Components/Services';
import Work from './Components/Work';
import Teams from './Components/Teams';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header />
      </header>
      <main>
        <Slider />
        <About />
        <Services />
        <Work />
        <Teams />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer id='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
