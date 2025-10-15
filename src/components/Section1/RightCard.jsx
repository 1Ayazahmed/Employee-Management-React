import RightCardContent from './RightCardContent.jsx'
const RightCard = (props) => {
    // console.log(props);
    
  return (
    <div className='h-full w-80 relative overflow-hidden  shrink-0 rounded-4xl'>
        <img className='bg-gray-900 brightness-70 h-full w-full object-cover' src={props.img} alt="" />
  
       <RightCardContent intro={props.intro} tag={props.tag} id={props.id}/>
      


    </div>
  )
}

export default RightCard