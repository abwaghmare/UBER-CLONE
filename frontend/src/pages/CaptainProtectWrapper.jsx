// CaptainProtectWrapper.jsx
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const { captain, setCaptain, isLoading, setIsLoading, setError } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchCaptainProfile = async () => {
            if (!token) {
                navigate('/captain-login');
                return;
            }

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/profile`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );

                if (response.status === 200) {
                    setCaptain(response.data.captain);
                }
            } catch (err) {
                setError(err.message);
                localStorage.removeItem('token');
                navigate('/captain-login');
            } finally {
                setIsLoading(false);
            }
        };

        if (!captain) {
            fetchCaptainProfile();
        } else {
            setIsLoading(false);
        }
    }, [token, navigate, setCaptain, setError, setIsLoading, captain]);

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return children;
};

export default CaptainProtectWrapper;