import './Sidebar.scss';


const Sidebar = () => {

    return (
        <>
        <nav className='sidebar-container'>
            <ul className='section-container'>
                <a href="#intro">
                    <li className="section">Home</li>                
                </a>

                <a href="#about">
                    <li className="section">About</li>
                </a>

                <a href="#technologies">
                    <li className="section">Technologies</li>
                </a>
                <a href="#projects">
                    <li className="section">Projects</li>
                </a>

                <a href="#contact">
                    <li className="section">Contact</li>
                </a>
            </ul>
        </nav>
    
    </>
  )
}

export default Sidebar;