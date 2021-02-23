import { useContext, useEffect, useState } from 'react'
import { HoverContext } from '../../Contexts/Hover'  
import '../../access/LoadingPage.css'
export default function LoadingChild(props) {

    const loadingChild = props.loadingChild
    const { 
        setHoverFunc
    } = useContext(HoverContext)  

    const [animation, setAnimation] = useState(false)
    const [animation2, setAnimation2] = useState(false)
    const [animation3, setAnimation3] = useState(false) 
    
    useEffect(()=>{
        setTimeout(() => {
            setAnimation(true)
        }, 400);
        setTimeout(() => {
            setAnimation2(true)
        }, 800);
        setTimeout(() => {
            setAnimation3(true) 
        }, 1200);   
    }, [animation, animation2, animation3]) 

    return (
        <div 
            className={loadingChild ? "loading-child loading-child-show" : "loading-child"}
            onMouseMove={()=>{ 
                setHoverFunc(false)
            }}
        >  
            <div className="loading-line flex">
                <div className="loading-scroll-line"></div>
                <div className={animation3 ? "loading-line-item loading-line-item-height" : "loading-line-item"}></div>
                <div 
                    className={animation2 ? "loading-line-item loading-line-item-height" : "loading-line-item"}
                    style={{
                        marginTop: `${window.innerHeight}px`
                    }}></div>
                <div className={animation ? "loading-line-item loading-line-item-height" : "loading-line-item"}></div>
                <div 
                    className={animation2 ? "loading-line-item loading-line-item-height" : "loading-line-item"}
                    style={{
                        marginTop: `${window.innerHeight}px`
                    }}></div>
                <div className={animation3 ? "loading-line-item loading-line-item-height" : "loading-line-item"}></div>
            </div>  
        </div>
    )
}