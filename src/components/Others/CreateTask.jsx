import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskType, setTaskType] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({  
      taskTitle,
      taskDescription,
      assignTo,
    taskType,
    taskDate,
    });

    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach((elem) => {
      if ( assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        console.log(elem);
        
        
      }
    });

    setTaskTitle("");
    setDescription("");
    setAssignTo("");
    setTaskType("");
    setTaskDate("");
  };



  return (
    <div className="p-5 bg-[#1C1C1C] mt-10 rounded">
      <form
        onSubmit={submitHandler}
        className="text-white flex w-full items-start justify-between flex-wrap"
      >
        {/* Left Div */}
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make UI Design"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              placeholder="Employee Name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Type</h3>
            <input
              type="text"
              placeholder="Design, Dev etc.."
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>

        {/* Right Div */}
        <div className="flex flex-col items-start w-2/5">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]"
            cols="30"
            rows="10"
          />
          <button
            type="submit"
            className="bg-[#24cfa6] text-sm mt-4 w-full rounded py-3 px-5 hover:bg-[#286b5c]"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
