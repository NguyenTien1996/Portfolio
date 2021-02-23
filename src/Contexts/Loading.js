import React, { useState } from 'react'

export const LoadingContext = React.createContext();

export function LoadingProvider(props) {
    
    const [loading ,setLoading] = useState(true) 
    const [tabChange, setTabChange] = useState(false)

    const setLoadingFunc = (bool) => {
        setLoading(bool);
    };
    const setTabChangeFunc = (bool) => { 
        setTabChange(bool); 
    }; 

    return (
        <LoadingContext.Provider
            value={{ 
                tabChange: tabChange,
                setTabChangeFunc: setTabChangeFunc,
                loading: loading,
                setLoadingFunc: setLoadingFunc
            }}
        >
            {props.children}
        </LoadingContext.Provider>
    )
}