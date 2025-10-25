import React, { useState } from 'react'

const Header = (props) => {

const [userName, setUserName] = useState("");

/* This code block is setting the `userName` state based on the value of the `data` prop passed to the
`Header` component. */
// if(!props.data){
//   setUserName("Admin");
// }
// else{
//   setUserName(props.data.firstName);
// }


const logOutUser = () => {
  localStorage.setItem("isLoggedIn","");
  // console.log(props.changeUser);
  props.changeUser("");
  
  // window.location.reload();
}


  return (
    <>
    <div className='flex justify-between items-end text-white  '>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold text-[#24cfa6] text-shadow-[0_5px_35px_rgb(36,207,166)] '> userName👋</span></h1>
        <button onClick={logOutUser} className=' text-lg font-medium text-white bg-[#24cfa6] px-5 py-2 rounded-full cursor-pointer hover:bg-[#20a082]'>Logout</button>
    </div>
    </>
  )
}

export default Header