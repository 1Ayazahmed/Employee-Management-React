import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {
  const HeroRightImageData= [
    {
      img:"https://images.unsplash.com/photo-1606216769800-e3532cf98bbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eaque velit rerum! Ex, voluptate ratione. Laboriosam reprehenderit ut possimus sed???",
      tag:"Satisfied"
     },
       {
      img:"https://images.unsplash.com/photo-1637689810282-4692c7677feb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eaque velit rerum! Ex, voluptate ratione. Laboriosam reprehenderit ut possimus sed?",
      tag:"UnderServed"
     },
       {
      img:"https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eaque velit rerum! Ex, voluptate ratione. Laboriosam reprehenderit ut possimus sed?",
      tag:"UnderBanked"
     },
     {
      img:"https://plus.unsplash.com/premium_photo-1661310261765-f0481298ac4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eaque velit rerum! Ex, voluptate ratione. Laboriosam reprehenderit ut possimus sed?",
      tag:"UnderProcess"
     }
  ]
  return (
    <>
      <Section1 HeroRightImageData={HeroRightImageData}/>
      <Section2/>
    </>
  )
}

export default App