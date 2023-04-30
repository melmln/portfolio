import "./About.scss";
import heartIcon from '../../../public/assets/icons/heart-icon.svg'

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <h1 className="about-h1">ABOUT</h1>

        <div className="window">
            <div className="title">Get to know me better.</div>

          <div className="user-container">
            <div className="user-avatar">
                <div className="user-pic"></div> 
                <div className="username">mel.molina</div>
            </div>
            <div className="heart">
              <img src={heartIcon} alt="heart-icon" />
            </div>
            <div className="user-likes">Liked by <span className="underline">you</span> and 6 others </div>
          </div>

          <div className="post">
            In 2022, I graduated as <span className="underline">frontend developer</span> at Coderhouse while also
            studying Biological Sciences at the University of Buenos Aires. That
            same year, my partner and I decided to move to Spain, so I had to
            temporarily leave my university studies to live here. I have <span className="underline">one
            year of experience</span> creating responsive websites, and I currently
            work as a freelancer. Along this journey, I realized my passion for 
            <span className="underline"> UX/UI design</span>, so now I'm studying in this area to complement my
            design skills with development.
          </div>
          <div className="hobbies">
            <ul>
                <li className="hobbie-item">🎨 I love drawing and painting.</li>
                <li className="hobbie-item">🧬 I’m a very curious person, so I like biology and science.</li>
                <li className="hobbie-item">🎧 My favorite music genre is R&B, I listen to music a lot.</li>
                <li className="hobbie-item">🎬 Love to spend time watching movies and TV shows.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
