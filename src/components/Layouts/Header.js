import { useContext, useRef, useState } from 'react' 
import { HoverContext } from '../../Contexts/Hover'
import { LoadingContext } from '../../Contexts/Loading'
import '../../access/Header.css'
import '../../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' 
import { withRouter } from 'react-router-dom'; 
import Div100VH from 'react-div-100vh'

function Header(props) {  

    const [openMenu, setOpenMenu] = useState(false)
    const { 
        setHoverFunc
    } = useContext(HoverContext)

    const {
        setTabChangeFunc
    } = useContext(LoadingContext)

    const expandRef = useRef()
    const colapseRef = useRef()
    const location = props.location.pathname.split("/")[1]
    const redirect = (url) => {
        setTabChangeFunc(true)
        setTimeout(()=>{
            props.history.push(`/${url}`) 
            setTabChangeFunc(false)
        }, 2000)
    } 

    return (
        <div className="menu"> 
            <div 
                className="menu-mobile flex-center"
                onClick={(event)=>{
                    expandRef.current.style.backgroundColor = '#191919';
                    expandRef.current.style.display = 'block';   
                    expandRef.current.style.top = `${event.pageY - 1500}px`;
                    expandRef.current.style.left = `${event.pageX - 1500}px`;  
                    setTimeout(() => {
                        setOpenMenu(true);
                        document.body.style.overflow = 'hidden'; 
                    }, 500); 
                    setTimeout(() => { 
                        expandRef.current.style.display = 'none'; 
                    }, 1000); 
                }}
                onMouseEnter={()=>{ 
                    setHoverFunc(true)
                }}
                onMouseLeave={()=>{ 
                    setHoverFunc(false)
                }} 
            >
                <FontAwesomeIcon icon={faBars} className="icon"/>
            </div>
            <div 
                className="expand" 
                ref={expandRef}
            ></div>
            <div 
                className="colapse" 
                ref={colapseRef}
            ></div>
            <Div100VH className={openMenu ? "menu-mobile-container menu-mobile-container-open" : "menu-mobile-container"}>
                <div className={openMenu ? "menu-mobile-box menu-mobile-box-open" : "menu-mobile-box"}>
                    <div 
                        className="menu-mobile flex-center"
                        onClick={(event)=>{
                            colapseRef.current.style.backgroundColor = '#4bffa5';
                            colapseRef.current.style.display = 'block';  
                            colapseRef.current.style.top = `${event.pageY - 1500}px`;
                            colapseRef.current.style.left = `${event.pageX - 1500}px`;  
                            setTimeout(() => {
                                setOpenMenu(false) 
                                document.body.style.overflow = 'unset'; 
                            }, 600); 
                            setTimeout(() => { 
                                colapseRef.current.style.display = 'none'; 
                            }, 600); 
                        }}
                        onMouseEnter={()=>{ 
                            setHoverFunc(true)
                        }}
                        onMouseLeave={()=>{ 
                            setHoverFunc(false)
                        }} 
                    >
                        <FontAwesomeIcon icon={faTimes} className="icon"/>
                    </div>
                    <div className="menu-mobile-item-box flex">
                        <div className="menu-mobile-item-list flex-center flex-col"> 
                            <div  
                                className={location === "home" || location === "" ? "menu-mobile-item-item menu-mobile-item-item-active" : "menu-mobile-item-item"}
                                onMouseEnter={()=>{ 
                                    setHoverFunc(true)
                                }}
                                onMouseLeave={()=>{ 
                                    setHoverFunc(false)
                                }}
                                onClick={()=>{
                                    setTimeout(() => {
                                        setOpenMenu(false) 
                                    }, 2000);
                                    redirect("home") 
                                }}
                            >
                                <p>Home</p>  
                            </div>
                            <div  
                                className={location === "about" || location === "" ? "menu-mobile-item-item menu-mobile-item-item-active" : "menu-mobile-item-item"}
                                onMouseEnter={()=>{ 
                                    setHoverFunc(true)
                                }}
                                onMouseLeave={()=>{ 
                                    setHoverFunc(false)
                                }}
                                onClick={()=>{
                                    setTimeout(() => {
                                        setOpenMenu(false) 
                                    }, 2000);
                                    redirect("about") 
                                }}
                            >
                                <p>About</p>  
                            </div>
                            <div  
                                className={location === "project" || location === "" ? "menu-mobile-item-item menu-mobile-item-item-active" : "menu-mobile-item-item"}
                                onMouseEnter={()=>{ 
                                    setHoverFunc(true)
                                }}
                                onMouseLeave={()=>{ 
                                    setHoverFunc(false)
                                }}
                                onClick={()=>{
                                    setTimeout(() => {
                                        setOpenMenu(false) 
                                    }, 2000);
                                    redirect("project") 
                                }}
                            >
                                <p>Project</p>  
                            </div>
                            <div  
                                className={location === "contact" || location === "" ? "menu-mobile-item-item menu-mobile-item-item-active" : "menu-mobile-item-item"}
                                onMouseEnter={()=>{ 
                                    setHoverFunc(true)
                                }}
                                onMouseLeave={()=>{ 
                                    setHoverFunc(false)
                                }}
                                onClick={()=>{
                                    setTimeout(() => {
                                        setOpenMenu(false) 
                                    }, 2000);
                                    redirect("contact") 
                                }}
                            >
                                <p>Contact</p>  
                            </div>
                        </div>
                        <div className="menu-mobile-item-contact flex-center flex-col">
                            <h2>EMAIL</h2>
                            <a href="mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a>
                            <h2>Phone</h2> 
                            <p>0948147359</p> 
                        </div>
                    </div>
                </div>
            </Div100VH>
            <div className="navbar flex">
                <div 
                    className={location === "home" || location === "" ? "navbar-item navbar-item-active" : "navbar-item"}
                    onMouseEnter={()=>{ 
                        setHoverFunc(true)
                    }}
                    onMouseLeave={()=>{ 
                        setHoverFunc(false)
                    }}
                    onClick={()=>{
                        redirect("home")
                    }}
                >
                    <p>Home</p>
                    <p>Home</p>
                </div>
                <div 
                    className={location === "about" ? "navbar-item navbar-item-active" : "navbar-item"}
                    onMouseEnter={()=>{ 
                        setHoverFunc(true)
                    }}
                    onMouseLeave={()=>{ 
                        setHoverFunc(false)
                    }}
                    onClick={()=>{
                        redirect("about") 
                    }}
                >
                    <p>About</p>
                    <p>About</p>
                </div>
                <div 
                    className={location === "project" ? "navbar-item navbar-item-active" : "navbar-item"}
                    onMouseEnter={()=>{ 
                        setHoverFunc(true)
                    }}
                    onMouseLeave={()=>{ 
                        setHoverFunc(false)
                    }}
                    onClick={()=>{
                        redirect("project") 
                    }}
                >
                    <p>Project</p>
                    <p>Project</p>
                </div>
                <div 
                    className={location === "contact" ? "navbar-item navbar-item-active" : "navbar-item"}
                    onMouseEnter={()=>{ 
                        setHoverFunc(true)
                    }}
                    onMouseLeave={()=>{ 
                        setHoverFunc(false)
                    }}
                    onClick={()=>{
                        redirect("contact") 
                    }}
                >
                    <p>Contact</p>
                    <p>Contact</p>
                </div> 
            </div>
        </div>
    )
}
export default withRouter(Header)