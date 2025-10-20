import React from 'react'
import Headers from '../Others/Header'
import TotalTasks from '../Others/HomeTaskCards/TotalTasks'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Headers/>
        <TotalTasks/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard