
const RightCardContent = (props) => {
  return (
     <div className='absolute w-full h-full top-0 left-0 p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full flex justify-center items-center h-14 w-14'>{props.id+1}</h2>
            <div>
            <p className='text-xl leading-8 text-white mb-10'> {props.intro}</p>
           
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
             </div>
        </div>
  )
}

export default RightCardContent