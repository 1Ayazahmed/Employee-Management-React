import RightCard from "./RightCard"


const RightContent = (props) => {
  return (
    <div id='hero-right-container' className="h-full w-2/3 flex flex-nowrap overflow-x-auto rounded-4xl gap-10">
    {
      props.HeroRightImageData.map((data,index)=>{
        return <RightCard key={index}  id={index} img={data.img} tag={data.tag} intro={data.intro}/>
      })
      
    }
    {/* {
       props.HeroRightImageData.map((data,index)=>{
        return <RightCard img={data.img} />
      })
    } */}
    


      
    </div>
  )
}

export default RightContent