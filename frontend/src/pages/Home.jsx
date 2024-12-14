import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://i.pinimg.com/originals/9f/48/32/9f483202a690f16d5cf6f012cb159730.jpg)] h-screen w-full pt-8 flex justify-between flex-col  bg-gray-300">
        <img className='w-14 ml-9' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="" />
        <div className='bg-white bg-opacity-50 px-4 py-4 pb-7'>
            <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
            <Link to = '/login' className='flex justify-center items-center w-full bg-black text-white py-3 mt-5 rounded-lg'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
