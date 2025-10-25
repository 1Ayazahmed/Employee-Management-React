import React from 'react'
import Headers from '../Others/Header'
import TotalTasks from '../Others/HomeTaskCards/TotalTasks'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <h1 className='text-white'>{props.isLoggedInUserData.id}</h1>
        <Headers changeUser={props.changeUser} data={props.isLoggedInUserData}/>
        <TotalTasks data={props.isLoggedInUserData}/>
        <TaskList data={props.isLoggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard