import './App.scss';
import Header from './components/Header/Header';
import Intro from './Pages/Intro/Intro';
import About from './Pages/About/About';
import Technologies from './Pages/Technologies/Technologies'
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App;
