import React from 'react'

const Auth = () => {
  return (
    <div className='bg-[#C40000] h-dvh w-dvw flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center justify-end h-[40dvh]'>
            <img src="./blood.png" alt="blood drop" className='h-30  w-20'/>
            <h2 className=' font-medium text-3xl underline rounded-2xl mt-2 text-white'>Blood4Life</h2>
        </div>
        <div className='flex flex-col gap-3 items-center mb-5 justify-end h-[45dvh] w-full'>
            <button className='h-20 border-3 w-[80%] font-medium text-xl rounded-2xl bg-white text-red-600 border-white'>
                Login
            </button>
            <button className='h-20 border-3 w-[80%] font-medium text-xl rounded-2xl bg-red-600 text-white border-white'>
                Create Account
            </button>
        </div>

    </div>
  )
}

export default Auth