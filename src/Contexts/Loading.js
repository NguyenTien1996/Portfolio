import React,{ useState} from 'react';

export const LoadingContext = React.createContext();

const LoadingProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [tabChange, setTabChange] = useState(true);

    const setLoadingFunc = (bool) => {
        setLoading(bool);
    };
    const setTabChangeFunc = (bool) => {
        setTabChange(bool)
    };

    return(
        <LoadingContext.Provider
            value={{
                tabChange: tabChange,
                setTabChangeFunc: setTabChangeFunc,
                loading: loading,
                setLoadingFunc: setLoadingFunc
            }}
        >
        </LoadingContext.Provider>
    )
}
export default React.memo(LoadingProvider)