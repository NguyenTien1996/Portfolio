import { useContext, useRef } from "react"; 
import Home from "./Home"; 
import '../App.css'
import { HoverContext } from "../Contexts/Hover"; 
import About from "./About";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { LoadingContext } from "../Contexts/Loading";
import LoadingChildOut from "../components/Layouts/LoadingChildOut"; 
import Header from "../components/Layouts/Header";
import classNames from 'classnames'

export default function Container() {  

    const cursor = useRef() 

    const {
        loading
    } = useContext(LoadingContext)
    const {
        hover
    } = useContext(HoverContext)  

    const { 
        tabChange
    } = useContext(LoadingContext)     

    return (
        <Router>
            { !loading &&
                <div  
                    onMouseMove={(event)=>{ 
                        setTimeout(()=>{ 
                            cursor.current.style.backgroundColor = 'rgba(75, 255, 165, 0.6)';
                            cursor.current.style.top = event.pageY + 'px';
                            cursor.current.style.left = event.pageX + 'px';
                        }, 100) 
                    }}  
                    onMouseLeave={(event)=>{  
                        cursor.current.style.opacity = '0'; 
                        cursor.current.style.backgroundColor = 'rgba(75, 255, 165, 0.6)';
                        cursor.current.style.top = event.pageY + 'px';
                        cursor.current.style.left = event.pageX + 'px';
                    }} 
                    onMouseEnter={(event)=>{  
                        cursor.current.style.opacity = '1';
                        cursor.current.style.backgroundColor = 'rgba(75, 255, 165, 0.6)';
                        cursor.current.style.top = event.pageY + 'px';
                        cursor.current.style.left = event.pageX + 'px';
                    }} >  
                    <div 
                        className={classNames('cursor', {
                            cursor_hover: hover
                        })}
                        ref={cursor} 
                    ></div>  

                    { tabChange &&
                        <LoadingChildOut/>
                    } 
                    <Header/>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/about" exact component={About}></Route> 
                    <Route path="/project" exact component={Portfolio}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                </div>
            }
        </Router>
    )
}