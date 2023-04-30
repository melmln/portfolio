import './Contact.scss'
import arrow from '../../../public/assets/img/Contact/arrow.png'

const Contact = () => {
  return (
    <>
        <div className="contact" id='contact'>
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
                            <input 
                            type="text" 
                            name='name'
                            placeholder="What's your name?"
                            className="input-name" />
                        </div>
                        <div className="input-container">
                            <div className="email">Email</div>
                            <input 
                            type="email"
                            name='email'
                            placeholder='Your email'
                             className="input-email" />
                        </div>
                        <div className="input-container">
                            <div className="subject">Subject</div>
                            <input 
                            type="text" 
                            name='subject'
                            placeholder='Feedback or suggestions'
                            className="input-subject" />
                        </div>

                        <textarea 
                        name="textarea" 
                        id="message" 
                        cols="30" 
                        rows="15"
                        placeholder='Say hi!'
                        className='textarea'
                        >
                        </textarea>
                        
                        <div className="lets-talk-container">
                            <button className="lets-talk-btn" type='submit'>Let's talk!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;