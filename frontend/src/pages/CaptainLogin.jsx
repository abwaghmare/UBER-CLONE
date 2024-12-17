import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {

    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const CaptainData = {
            email: email, 
            password: password
        };

        axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, CaptainData)
        .then((response) => {
            if(response.status === 200) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        })

        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 h-screen flex justify-between flex-col'>
            <div>
                <img className='w-14 mb-10' src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="" />
                <form
                    onSubmit={(e) => submitHandler(e)}
                >
                    <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required 
                        type="email" 
                        placeholder='email@example.com' 
                    />
                    
                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required 
                        type="password" 
                        placeholder='password' 
                    />
                    
                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    >Login</button>

                    <p className="text-center">New here? <Link to="/captain-signup" className='text-blue-600'>Create New Account</Link></p>
                </form>
            </div>
            <div>
                <Link 
                    to="/login"
                    className='bg-gradient-to-r from-[#efae0b] to-[#e3a406] flex justify-center items-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                >Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin
