import { useContext, useEffect, useState } from 'react'
import { HoverContext } from '../../Contexts/Hover'   
import '../../access/LoadingPage.css'
export default function LoadingChildOut(props) { 

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
            className="loading-child loading-child-show" 
            onMouseMove={()=>{ 
                setHoverFunc(false)
            }}
        >  
            <div className="loading-line flex">
                <div 
                    className={animation3 ? "loading-line-item-out loading-line-item-out-height" : "loading-line-item-out"}
                    style={{
                        marginTop: `${window.innerHeight}px`
                    }}
                ></div>
                <div className={animation2 ? "loading-line-item-out loading-line-item-out-height" : "loading-line-item-out"}></div>
                <div 
                    className={animation ? "loading-line-item-out loading-line-item-out-height" : "loading-line-item-out"}
                    style={{
                        marginTop: `${window.innerHeight}px`
                    }}
                ></div>
                <div className={animation2 ? "loading-line-item-out loading-line-item-out-height" : "loading-line-item-out"}></div>
                <div 
                    className={animation3 ? "loading-line-item-out loading-line-item-out-height" : "loading-line-item-out"}
                    style={{
                        marginTop: `${window.innerHeight}px`
                    }}
                ></div>
            </div>  
        </div>
    )
}