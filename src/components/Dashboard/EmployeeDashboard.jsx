import React from 'react'
import Headers from '../Others/Header'
import TotalTasks from '../Others/HomeTaskCards/TotalTasks'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({isLoggedInUserData}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <h1 className='text-white'>{isLoggedInUserData.id}</h1>
        <Headers data={isLoggedInUserData}/>
        <TotalTasks data={isLoggedInUserData}/>
        <TaskList data={isLoggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard