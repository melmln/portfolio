import './Intro.scss';
// assets
import avatar from '../../../public/assets/avatar.png'
import linkedinIcon from '../../../public/assets/icons/linkedin-icon.svg'
import githubIcon from '../../../public/assets/icons/github-icon.svg'
import behanceIcon from '../../../public/assets/icons/behance-icon.svg'


const Intro = () => {
  return (
    <>
        <div className="intro" id='intro'>
            

            <div className="info-intro-container">
              <h5>Hi! My name is</h5>
              <h1 className="my-name">Melany Molina Verdún</h1>
              <h4 className="profile">I'm a <span className='front-dev'>frontend developer</span></h4>
            </div>

            <div className="avatar-container">
              <div className="avatar-background">
                <img src={avatar} alt="avatar" className="avatar" />
              </div>
            </div>

            <a href="Frontend Developer - Melany Molina Verdún.pdf" download>
              <button className="resume-btn">Resume</button>
            </a>
        
            <div className="social-networks-container">
              <div className="line"></div>
              <div className="social-networks">

                  <a href="https://www.linkedin.com/in/melany-molina-verdun/" target='_blank'>
                    <img src={linkedinIcon} alt="linkedin" className="linkedin-icon" />
                  </a>
     
                  <a href="https://github.com/melmln" target='_blank'>
                    <img src={githubIcon} alt="github" className="github-icon" />
                  </a>
     
                  <a href="https://www.behance.net/melanymolina2" target='_blank'>
                  <img src={behanceIcon} alt="behance" className="behance-icon" />
                  </a>  
              </div>
              <div className="line"></div>
            </div>
            
        </div>
    </>
  )
}

export default Intro;