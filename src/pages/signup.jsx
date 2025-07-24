import React from 'react'

const Signup = () => {
  return (
    <div className='bg-red-600 h-dvh w-dvw flex flex-col items-center justify-between'>
        <div className='flex items-end h-[50dvh]'>
            <img src="./blood.png" alt="blood drop"/>
        </div>
        <div className='flex flex-col gap-3 justify-end h-[50dvh]'>
            <button className='h-20 border-2 rounded-2xl border-white'>
                Sign Up
            </button>
            <button className='h-20 border-2 rounded-2xl border-white'>
                Create Account
            </button>
        </div>

    </div>
  )
}

export default Signup