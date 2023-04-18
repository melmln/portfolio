import './Contact.scss'
import arrow from '../../assets/img/Contact/arrow.png'

const Contact = () => {
  return (
    <>
        <div className="contact">
            <h1 className="contact-h1">CONTACT</h1>

            <div className="contact-title-container">
                <div className="title">
                    Let's create something great <span className='underline'>together</span>
                </div>
                <div className="arrow-container">
                    <img 
                    src={arrow} 
                    alt="arrow" 
                    className="arrow" />
                </div>
            </div>
            <div className="form-container">
                <div className="form-window">
                    <form>
                        <div className="input-container">
                            <div className="name">Name</div>
                            <input type="text" className="input-name" />
                        </div>
                        <div className="input-container">
                            <div className="email">Email</div>
                            <input type="text" className="input-email" />
                        </div>
                        <div className="input-container">
                            <div className="subject">Subject</div>
                            <input type="text" className="input-subject" />
                        </div>

                        <textarea 
                        name="textarea" 
                        id="" 
                        cols="30" 
                        rows="10"
                        className='textarea'
                        >

                        </textarea>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;