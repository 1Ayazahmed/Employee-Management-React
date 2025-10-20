import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-end text-white  '>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold text-[#24cfa6] text-shadow-[0_5px_35px_rgb(36,207,166)] '> Ayaz 👋</span></h1>
        <button className=' text-lg font-medium text-white bg-[#24cfa6] px-5 py-2 rounded-full'>Logout</button>
    </div>
    </>
  )
}

export default Header