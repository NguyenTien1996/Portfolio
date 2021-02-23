import './App.css';   
import { LoadingProvider } from './Contexts/Loading';
import { useEffect } from 'react';
import LoadingPage from './components/Layouts/LoadingPage';  
import { HoverProvider } from './Contexts/Hover'; 
import Container from './pages/Container'; 

function App() {  
    
    useEffect(()=>{ 
        document.body.style = 'background: #101010;';
    },[]) 

    return (  
        <LoadingProvider> 
        <HoverProvider>
            <LoadingPage/>  
            <div className="App">  
                <Container/>
            </div> 
        </HoverProvider>
        </LoadingProvider> 
    );
}

export default App;
