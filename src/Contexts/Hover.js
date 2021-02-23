import React, { useState } from 'react'

export const HoverContext = React.createContext();

export function HoverProvider(props) {
    
    const [hover ,setHover] = useState(false) 

    const setHoverFunc = (bool) => {
        setHover(bool);
    }; 

    return (
        <HoverContext.Provider
            value={{
                hover: hover, 
                setHoverFunc: setHoverFunc
            }}
        >
            {props.children}
        </HoverContext.Provider>
    )
}