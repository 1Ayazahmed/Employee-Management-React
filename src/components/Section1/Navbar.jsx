import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className='flex justify-between items-center py-6 px-16 bg-gray-200'>
    <h4 className='bg-black text-white text-sm px-5 py-3 rounded-full uppercase'>Hello Bank</h4>
    <button className='text-sm uppercase tracking-wider bg-gray-300 px-8 py-2 rounded-full'>Digital Banking Platform</button>
   </div>
   </>
  )
}

export default Navbar