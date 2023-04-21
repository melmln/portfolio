import './BurgerMenu.scss';
import burgerMenu from '../../assets/icons/burger-menu.png';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BurgerMenu = () => {

      const [menuIsOpen, setMenuIsOpen] = useState(false);
      const handleMenuIsOpen = () => {
        setMenuIsOpen(!menuIsOpen)
        console.log(menuIsOpen)
    }

  return (
    <>
        <div className='burger-menu-container'>
          <img src={burgerMenu} 
          alt="burger-menu" 
          className="burger-menu-img"
          onClick={handleMenuIsOpen}
          />
          { menuIsOpen ? ( 
            <div className="sidebar">
              <Sidebar/>
            </div> ) : ''
            
          }
        </div>
    </>
  )
}

export default BurgerMenu;