import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-80 relative overflow-hidden bg-red-500 rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
        <div className='absolute w-full h-full top-0 left-0 p-10 flex flex-col justify-between bg-amber-400'>
            <h2 className='bg-white rounded-full flex justify-center items-center h-10 w-10'>1</h2>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus!</p>
            </div>
            <div>
                <button>Satisfied</button>
                <button><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>

    </div>
  )
}

export default RightCard