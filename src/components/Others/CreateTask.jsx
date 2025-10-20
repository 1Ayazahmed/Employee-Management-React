import React from 'react'

const CreateTask = () => {
  return (
       <div className="p-5 bg-[#1C1C1C] mt-10 rounded  ">
        <form className="text-white flex w-full items-start justify-between flex-wrap ">
          {/* Left Div Start */}
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4" type="text" placeholder="Make UI Design" />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4" type="date" />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4" type="text" placeholder="Employee Name" />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Type</h3>
              <input  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4" type="text" placeholder="Design, Dev etc.." />
            </div>
          </div>
          {/* Left Div End */}

          {/* Right Div Start */}
          <div className="flex flex-col items-start w-2/5">
            <h3 className="text-sm text-gray-3 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded  outline-none bg-transparent  border-[1px]"
              name=""
              id=""
              col="30"
              row="10"
            ></textarea>

            <button
              className="bg-[#24cfa6] text-sm mt-4  w-full  rounded py-3 px-5 hover:bg-[#286b5c]"
              type="submit"
            >
              Add Task
            </button>
          </div>
          {/* Right Div Start */}
        </form>
      </div>
  )
}

export default CreateTask