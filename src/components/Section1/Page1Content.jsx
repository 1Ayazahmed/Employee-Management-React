import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent.jsx'

const Page1Content = (props) => {
  return (
    <div className=' flex items-center gap-10 py-10 h-[90vh] px-18'>
      <LeftContent/>
      <RightContent HeroRightImageData={props.HeroRightImageData}/>
    </div>
  )
}

export default Page1Content