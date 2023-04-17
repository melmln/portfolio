import './App.scss';
import Header from './components/Header/Header';
import Intro from './Pages/Intro/Intro';
import About from './Pages/About/About';
import Technologies from './Pages/Technologies/Technologies'
import ProjectWindow from './components/ProjectWindow/ProjectWindow';

function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Technologies/>
      <ProjectWindow/>
    </>
  )
}

export default App;
