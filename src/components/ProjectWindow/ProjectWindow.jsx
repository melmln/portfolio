import './ProjectWindow.scss'
import projects from '../../utils/projects.json'

const ProjectWindow = () => {
  return (
    <>  {projects.map((project) => {

        const {id, title, img, description, type} = project;
            
        return (

                <div key={id} className="project-window">
                    <div className="number">{id}</div>

                    <div className="window">
                        <div className="project-title-container">
                            <h1 className="title">{title}</h1>

                            <div className="title-btn-container">
                                <button className={`visit-btn ${title}`}>Visit</button>
                                <button className="code-btn">Code</button>
                            </div>
                        </div>

                        <div className="project-img-container">
                            <img 
                            src={`/src/assets/img/Projects/${img}`} 
                            alt="project-img" 
                            className="project-img" />
                        </div>

                        <div className="project-info-container">
                            <div className="type">{type}</div>
                            <div className="description">{description}</div>
                        </div>

                    </div>
                </div>
            )
    })
    
        
        }
    </>
  )
}

export default ProjectWindow;