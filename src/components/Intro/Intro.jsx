import './Intro.scss';

const Intro = () => {
  return (
    <>
        <div className="intro-container">
            <div className="info-intro-container">
              <h5>Hi! My name is</h5>
              <h1 className="my-name">Melany Molina Verdún</h1>
              <h4 className="profile">I'm a <span className='front-dev'>frontend developer</span></h4>
            </div>
            <img src='' alt="avatar" className="avatar" />
        </div>
    </>
  )
}

export default Intro;