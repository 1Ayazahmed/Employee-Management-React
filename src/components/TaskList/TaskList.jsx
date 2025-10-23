import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // console.log(data);

  return (
    <div
      id="taskList"
      className=" h-[auto] flex items-center justify-start gap-5 flex-nowrap mt-10 w-full py-5 overflow-x-auto g-yellow-300 sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap "
    >
      {data.tasks.map((e, index) => {

        if (e.active) {
          return <AcceptTask key={index} data={e} />;
        }

        if (e.newTask) {
          return <NewTask key={index} data={e} />;
        } 

        if (e.completed) {
          return <CompleteTask key={index} data={e}/>;
        }

        if (e.failed) {
          return <FailedTask key={index} data={e}/>;
        }

      })}
    </div>
  );
};

export default TaskList;
