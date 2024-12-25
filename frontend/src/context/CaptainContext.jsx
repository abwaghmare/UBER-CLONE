// CaptainContext.jsx
import { createContext, useState, useCallback } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateCaptain = useCallback((captainData) => {
        setCaptain(captainData);
        setIsLoading(false);
        setError(null);
    }, []);

    const clearCaptain = useCallback(() => {
        setCaptain(null);
        setIsLoading(false);
        setError(null);
    }, []);

    const value = {
        captain,
        setCaptain: updateCaptain,
        clearCaptain,
        isLoading,
        setIsLoading,
        error,
        setError
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;