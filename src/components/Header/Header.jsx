import './Header.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
 
const Header = () => {

  return (
    <> 
      <nav>
          <div className={`burger-menu `}>
            <BurgerMenu/>
          </div>
          <a href="#message">
            <button className="hello-btn">Say hello</button>
          </a>
      </nav>
    </>
  )
}

export default Header;