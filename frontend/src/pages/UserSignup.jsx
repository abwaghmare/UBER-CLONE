import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname: firstname, 
        lastname: lastname,
      },
      email: email, 
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }


    setFirstname('');
    setLastname('');
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
                    <h3 className='text-lg font-medium mb-2'>Whats your Name</h3>
                    <div className="flex gap-4 mb-5">
                    <input 
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                        required 
                        type="text" 
                        placeholder='First name' 
                    />
                    <input 
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                        required 
                        type="text" 
                        placeholder='Last name' 
                    />
                    </div>
                    
                    <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required 
                        type="email" 
                        placeholder='email@example.com' 
                    />
                    
                    <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required 
                        type="password" 
                        placeholder='password' 
                    />
                    
                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    >Register</button>

                    <p className="text-center">Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></p>
                </form>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>By proceeding, you agree to Uber <Link to="/terms-of-service" className='text-blue-600'>Terms of Service</Link> and <Link to="/privacy-policy" className='text-blue-600'>Privacy Policy</Link>.</p>
            </div>
        </div>
  )
}

export default UserSignup
