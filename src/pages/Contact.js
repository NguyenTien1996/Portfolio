import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom' 
import '../access/Contact.css'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons' 
import BackgroundLine from '../components/Layouts/BackgroundLine'
import LoadingChild from '../components/Layouts/LoadingChild'
import axios from 'axios';

function Contact(props) {   

    const [loadingChild, setLoadingChild] = useState(true)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{ 
        window.scrollTo(0, 0) 
        document.body.style.overflow = "hidden"
        setTimeout(()=>{
            setLoadingChild(false)
            document.body.style.overflow = "unset"
        }, 2000) 
    }, []) 

    const onSubmit = (event) => {
        event.preventDefault(); 
        setLoading(true)
        axios.post('https://baonam-port.glitch.me/email', {  
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then((res)=>{
            setLoading(false)
            alert("Thank you for your contact!");
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        })
    }

    return (
        <div className="Contact" style={{height: `${window.innerHeight}px`}}> 
            <LoadingChild
                loadingChild={loadingChild}
            />
            <BackgroundLine/>
            <div className="contact-container">
                <div className="page-header flex-center">
                    <div className="page-title">
                        Contact
                    </div>
                    <div className="page-center-line"></div>
                    <div className="page-end-line flex">
                        <div className="line"></div>
                    </div>
                </div>  
                <div className="contact-box flex">
                    <div className="contact-left flex-col"> 
                        <div className="contact-text">
                            <h5>DON'T BE SHY !</h5>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        </div>
                        <div className="contact-info flex-center">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                            <a href = "mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a>
                        </div>
                        <div className="contact-info flex-center">
                            <FontAwesomeIcon icon={faPhone} className="icon"/>
                            0948147259
                        </div>
                    </div>
                    <form className="contact-right flex-col" onSubmit={onSubmit}>
                        <input 
                            placeholder="Name" className="input"
                            onChange={(event)=>{
                                setName(event.target.value)
                            }}
                            value={name}
                            required
                        ></input>
                        <input 
                            placeholder="Email" className="input"
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}
                            value={email}
                            required
                        ></input>
                        <input 
                            placeholder="Subject" className="input"
                            onChange={(event)=>{
                                setSubject(event.target.value)
                            }}
                            value={subject}
                            required
                        ></input>
                        <textarea 
                            placeholder="Message" className="textarea"
                            onChange={(event)=>{
                                setMessage(event.target.value)
                            }}
                            value={message}
                            required
                        ></textarea>
                        <button>
                            { !loading &&
                                <p>Send message</p>
                            }
                            { loading &&
                                <p>Sending...</p>
                            }
                        </button>
                    </form>
                </div> 
            </div> 
        </div>
    )

}
export default withRouter(Contact)