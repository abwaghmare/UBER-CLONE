import { createContext,useState } from 'react'

export const CaptainDataContext = createContext()

//note: also removed useContext from import
// const useCaptain = ()=>{
//     const context = useContext(captainDataContext);
//     if(!context){
//         throw new Error('useCaptain must be used within a CaptainProvider');
//     } 
//     return context;
// }

const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (newCaptain) => {
        setCaptain(newCaptain);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <div>
          <CaptainDataContext.Provider value={value}>
            {children}
          </CaptainDataContext.Provider>
        </div>
      )
}



export default CaptainContext
