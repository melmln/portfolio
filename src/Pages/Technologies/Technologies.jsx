import './Technologies.scss'

import techData from '../../utils/techData.js'

const Technologies = () => {
  return (
    <>
    <div className='technologies' id='technologies'>
        <h1 className='technologies-h1'>TECHNOLOGIES</h1>

        <div className="window">
            <div className="title">Check out what I'm good at.</div>
            
                <div className="technologies-list">
                    {techData.map((technology) => {

                            const {name, id, img} = technology

                        return (
                            <div key={id} className={`technology ${ name}`}>
                                <img 
                                src= {img}
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