import Navbar from "./Navbar";
import Page1Content from "./Page1Content";


const Section1 = (props) => {
  // console.log(props);
  
  return (

    <>
      <Navbar />
      <Page1Content HeroRightImageData={props.HeroRightImageData}/>
    </>

  );
};

export default Section1;
