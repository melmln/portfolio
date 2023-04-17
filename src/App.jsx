import './App.scss';
import Header from './components/Header/Header';
import Intro from './Pages/Intro/Intro';
import About from './Pages/About/About';
import Technologies from './Pages/Technologies/Technologies'
import Projects from './Pages/Projects/Projects';

function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Technologies/>
      <Projects/>
    </>
  )
}

export default App;
