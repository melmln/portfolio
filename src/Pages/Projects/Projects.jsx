import './Projects.scss'
import codeIllustration from '../../assets/img/Projects/code-illustration.png'
import ProjectWindow from '../../components/ProjectWindow/ProjectWindow'

const Projects = () => {
  return (
    <>
        <div className='projects' id='projects'>
            <h1 className="projects-h1">PROJECTS</h1>
            <div className="window">
                <div className="title">Take a look at what I've been working at.</div>

                <div className="window-illustration">
                    <div className="circle-illustration-container">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>
                    <div className="vscode-illustration">
                        <div className="bar-illustration"></div>
                        <img 
                        src={codeIllustration} 
                        alt="code-illustration" 
                        className="code-illustration" />
                    </div>
                </div>
            </div>
        </div>

        <ProjectWindow/>
    </>
  )
}

export default Projects