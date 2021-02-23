import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { HoverContext } from "../../Contexts/Hover" 
import { faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  

function Follow() {

    const { 
        setHoverFunc
    } = useContext(HoverContext)  

    return (
        <div className="home-fl">
            <div className="home-fl-text">Follow me</div>
            <div className="home-fl-line"></div>
            <div className="home-fl-list flex-center flex-col">
                <a 
                    href="https://github.com/dbaonam99"
                    className="home-fl-item flex-center" 
                    rel="noopener noreferrer"
                    onMouseEnter={()=>{ 
                        setHoverFunc(true)
                    }}
                    onMouseLeave={()=>{ 
                        setHoverFunc(false)
                    }} 
                    target="_blank"
                > 
                    <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
                </a>
                <a 
                    href="https://www.facebook.com/dbaonam99"
                    className="home-fl-item flex-center" 
                    rel="noopener noreferrer"
                    onMouseEnter={()=>{ 
                        setHoverFunc(true)
                    }}
                    onMouseLeave={()=>{ 
                        setHoverFunc(false)
                    }} 
                    target="_blank"
                >  
                    <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
                </a>
                <a 
                    href="mailto: dbaonam99@gmail.com"
                    className="home-fl-item flex-center" 
                    rel="noopener noreferrer"
                    onMouseEnter={()=>{ 
                        setHoverFunc(true)
                    }}
                    onMouseLeave={()=>{ 
                        setHoverFunc(false)
                    }} 
                    target="_blank"
                >  
                    <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                </a>
            </div> 
        </div>
    )
}
export default Follow;