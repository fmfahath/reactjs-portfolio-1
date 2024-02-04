import './App.css';
import About from './commponents/About';
import Footer from './commponents/Footer';
import Header from './commponents/Header';
import Hero from './commponents/Hero';
import Projects from './commponents/Projects';
import Resume from './commponents/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
