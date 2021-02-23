import React,{ useState} from 'react';

export const HoverContext = React.createContext();

const HoverProvider = (props) => {
    const [hover, setHover] = useState(false);

    const setHoverFunc = (bool) => {
        setHover(bool)
    }

    return(
        <HoverProvider.Provider
            value={{
                hover: hover,
                setHoverFunc: setHoverFunc
            }}
        >
        {props.childern}
        </HoverProvider.Provider>
    )
}

export default React.memo(HoverContext)