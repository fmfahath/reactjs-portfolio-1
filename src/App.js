import './App.css';
import About from './commponents/About';
import Header from './commponents/Header';
import Hero from './commponents/Hero';
import Projects from './commponents/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
