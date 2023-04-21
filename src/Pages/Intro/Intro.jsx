import './Intro.scss';
import avatar from '../../assets/avatar.png'
import linkedinIcon from '../../assets/icons/linkedin-icon.png'
import githubIcon from '../../assets/icons/github-icon.png'
import behanceIcon from '../../assets/icons/behance-icon.png'

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

            <a href="src\assets\Frontend Developer - Melany Molina Verdún.pdf" download>
              <button className="resume-btn">Resume</button>
            </a>
        
            <div className="social-networks-container">
              <div className="line"></div>
              <div className="social-networks">
                <img src={linkedinIcon} alt="linkedin" className="linkedin-icon" />
                <img src={githubIcon} alt="github" className="github-icon" />
                <img src={behanceIcon} alt="behance" className="behance-icon" />
              </div>
              <div className="line"></div>
            </div>
            
        </div>
    </>
  )
}

export default Intro;