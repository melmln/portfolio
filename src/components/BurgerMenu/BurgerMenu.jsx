import './BurgerMenu.scss';
import burgerMenu from '../../../public/assets/icons/burger-menu.svg';
import { useEffect, useState, useRef } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BurgerMenu = () => {

      // Defino estado para saber si el burger menu está activo o no
      const [activeMenu, setActiveMenu] = useState(false);
      // Almaceno la categoría en un estado 
      const [selectedCategory, setSelectedCategory] = useState('');

      let menuRef = useRef();
     
      // Función que cambia dinámicamente el estado del burger menu al clickearlo
      const handleActiveMenu = () => {
        setActiveMenu(!activeMenu)
      }
      // Función que actualiza el estado de la categoría para 
      // que cuando se clickee se cierre el sidebar
      const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        setActiveMenu(false);
      };
      
      useEffect(() => {
        // Función que cambia el estado a false para que el sidebar se cierre
        // Uso el event target para hacer que solo se cierre si clickeo afuera (Para saber si clickeo afuera uso useRef)
       
        let handleClickOutside = (e) => {
         
          // El current lee el componente al que le puse el ref = menuRef 
          // y el contains devuelve true si el event target esta dentro menuRef y false si está fuera
         
          if (menuRef.current && !menuRef.current.contains(e.target)) {
            setActiveMenu(false);

            console.log(menuRef.current)
          }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return() => {

          document.addEventListener('mousedown', handleClickOutside);
        }
        
      }, []);


  return (
    <>
        <div className='burger-menu-container'>
          <img src={burgerMenu} 
          alt="burger-menu" 
          className="burger-menu-img"
          onClick={handleActiveMenu}
          />
          
          { // Si el burguer menu esta activo, renderizo el sidebar 
            activeMenu ? ( 
              <div className="sidebar" ref={menuRef}>
                <Sidebar onCategoryClick = {handleCategoryClick}/>
              </div> ) : ''  
          }
        </div>
    </>
  )
}

export default BurgerMenu;