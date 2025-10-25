import React,{useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);

  return (
    <div className=" all-tasks-main-div p-5 bg-[#1C1C1C] rounded mt-5 text-white">
      <div className="bg-[#24cfa6] mb-2  px-4 flex justify-between rounded py-2 font-semibold ">
        <h5 className="w-1/5 text-lg font-medium  ">Employee Name</h5>
        <h5 className="w-1/5 text-lg font-medium  ">New Task</h5>
        <h5 className="w-1/5 text-lg font-medium  ">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium  ">Complete Task</h5>
        <h5 className="w-1/5 text-lg font-medium  ">Failed Task</h5>
      </div>

      <div className="h-screen  "
      id="task-lists">
        {
          authData.employees.map((user, index) => {
            return(
            <div
              key={index}
              className="bg-[#2A2A2A] mb-2 py-2 px-4 flex justify-between rounded border-2 border-[#24cfa6]"
              
            >
              <h5 className="w-1/5 text-lg font-medium   ">{user.firstName}</h5>
              <h5 className="w-1/5 text-lg font-medium   " >{user.taskCounts.newTask}</h5>
              <h5 className="w-1/5 text-lg font-medium   ">{user.taskCounts.active}</h5>
              <h5 className="w-1/5 text-lg font-medium   ">{user.taskCounts.completed}</h5>
              <h5 className="w-1/5 text-lg font-medium  ">{user.taskCounts.failed}</h5>
            </div>)
          })}
      </div>
    </div>
  );
};

export default AllTasks;
