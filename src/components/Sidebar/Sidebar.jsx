import './Sidebar.scss';

// Paso como prop onCategoryClcik al BurgerMenu la funcion handleCategoryClick
const Sidebar = ({onCategoryClick}) => {

const handleCategoryClick = (categoryName)=> {
    onCategoryClick(categoryName)
}
    return (
        <>
        <nav className='sidebar-container'>
            <ul className='section-container'>
                <a href="#intro">
                    <li className="section" onClick={() =>handleCategoryClick('Home')}>Home</li>                
                </a>

                <a href="#about">
                    <li className="section" onClick={() =>handleCategoryClick('About')}>About</li>
                </a>

                <a href="#technologies">
                    <li className="section" onClick={() =>handleCategoryClick('Technologies')}>Technologies</li>
                </a>
                <a href="#projects">
                    <li className="section" onClick={() =>handleCategoryClick('Projects')}>Projects</li>
                </a>

                <a href="#contact">
                    <li className="section" onClick={() =>handleCategoryClick('Contact')}>Contact</li>
                </a>
            </ul>
        </nav>
    
    </>
  )
}

export default Sidebar;