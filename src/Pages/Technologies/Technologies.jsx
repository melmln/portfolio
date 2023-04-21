import './Technologies.scss'

import technologies from '../../utils/technologies.json'

const Technologies = () => {
  return (
    <>
    <div className='technologies' id='technologies'>
        <h1 className='technologies-h1'>TECHNOLOGIES</h1>

        <div className="window">
            <div className="title">Check out what I'm good at.</div>
            
                <div className="technologies-list">
                    {technologies.map((technology) => {

                            const {name, id, img} = technology

                        return (
                            <div key={id} className={`technology ${ name}`}>
                                <img 
                                src={`src/assets/img/Technologies/${img}`}
                                alt={name} 
                                className={`technology-img`} />
                            </div>
                        )
                    })}
                </div>
        </div>
    </div>
    </>
  )
}

export default Technologies;