import React from 'react'

const AcceptTask = () => {
  return (
    <>   
    <div className="  h-full flex-shrink-0 w-[300px]  rounded-xl bg-[#24cfa6] ">
        <div className=" p-5 flex justify-between items-center text-white text-sm ">
          <h3 className="bg-[#22aa8a] py-1 px-3 rounded-2xl">High</h3>
          <h4 className="text-sm">10-18-2025</h4>
        </div>
        <div className=" p-5 text-white ">
          <h2 className="mt-5 text-2xl font-semibold">Active Task</h2>
          <hr className=" my-3 border-white " />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia
            enim dolore vitae! Soluta, doloribus.
          </p>
        </div>
        <div className='flex justify-between mt-5 p-5'>
        <button className='button-style bg-white py-1 px-2  text-sm text-black'>
            Mark as Completed
        </button >
        <button className='button-style bg-white py-1 px-2  text-sm text-black'>
            Mars as Failed
        </button>
        </div>
      </div>

      
    </>
  )
}

export default AcceptTask