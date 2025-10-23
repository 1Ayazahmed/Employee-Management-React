import React from 'react'

const FailedTask = ({data}) => {
  return (
   <div className="  h-full flex-shrink-0 w-[300px]  rounded-xl bg-[#24cfa6] ">
        <div className=" p-5 flex justify-between items-center text-white text-sm ">
          <h3 className="bg-[#22aa8a] py-1 px-3 rounded-2xl">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <div className=" p-5 text-white ">
          <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
          <hr className=" my-3 border-white " />
          <p className="text-sm">
            {data.taskDescription}
          </p>
        </div>

      <div className="mt-5 p-5">
        <button className=" button-style bg-white py-1 px-2  text-sm text-black">
          Failed  Task
        </button>
      </div>
    </div>
  )
}

export default FailedTask