import './Header.scss';
import burgerMenu from '../../assets/icons/burger-menu.png'
 
const Header = () => {
  return (
    <>
      <nav>
          <div className="burger-menu">
            <img src={burgerMenu} alt="" className="burger-menu-icon" />
          </div>
          <button className="hello-btn">Say hello</button>
      </nav>
    </>
  )
}

export default Header;