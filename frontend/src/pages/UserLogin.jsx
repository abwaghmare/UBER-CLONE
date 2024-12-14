import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email, 
            password: password
        });
        console.log(userData);
        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 h-screen flex justify-between flex-col'>
            <div>
                <img className='w-14 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
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

                    <p className="text-center">New here? <Link to="/signup" className='text-blue-600'>Create New Account</Link></p>
                </form>
            </div>
            <div>
                <Link 
                    to="/captain-login"
                    className='bg-gradient-to-r from-[#1E4D2B] to-[#1E4D2B] flex justify-center items-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                >Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin