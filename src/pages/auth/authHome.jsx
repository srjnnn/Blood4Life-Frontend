import React from 'react'
import { Link } from 'react-router-dom'

const AuthHome = () => {
  return (
    <div className='bg-[#C40000] h-dvh w-dvw flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center justify-end h-[40dvh]'>
            <img src="./blood.png" alt="blood drop" className='h-30  w-20'/>
            <h2 className=' font-medium text-3xl rounded-2xl mt-2 text-white'>Blood4Life</h2>
        </div>
        <div className='flex flex-col gap-3 items-center mb-15 justify-end h-[45dvh] w-full'>
            <Link
            to="./signin"
            className='flex items-center justify-center h-20 border-3 w-[80%] font-medium text-xl rounded-lg bg-white text-red-600 border-white'>
                Sign In
            </Link>
            <Link
            to="./signup"
            className='flex items-center justify-center h-20 border-3 w-[80%] font-medium text-xl rounded-lg bg-red-600 text-white border-white'>
                Create Account
            </Link>
        </div>

    </div>


  )
}

export default AuthHome