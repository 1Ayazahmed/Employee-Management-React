

const TotalTasks = ({data}) => {
  return (
  
  <div className=' overflow-hidden flex justify-between gap-5 screen mt-10 sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap sm:flex-col-nowrap'>
    <div className='rounded-xl w-[45%] py-6 px-9 bg-[#24cfa6] bg-opacity-10 text-white ]'>
        <h2 className='text-3xl font-semibold '>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
    </div>
     <div className='rounded-xl w-[45%] py-6 px-9 bg-[#24cfa6] bg-opacity-10 text-white ]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
    </div>
     <div className='rounded-xl w-[45%] py-6 px-9 bg-[#24cfa6] bg-opacity-10 text-white ]'>
        <h2 className='text-3xl font-semibold '>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
    </div>
     <div className='rounded-xl w-[45%] py-6 px-9 bg-[#24cfa6] bg-opacity-10 text-white ]'>
        <h2 className='text-3xl font-semibold '>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task </h3>
    </div>
  </div>
  
  )
}

export default TotalTasks