import React from "react";
import Slider from "react-slick";
import './Slider.css'
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className="w-1140">
        <div className="slider-container" style={{width:'100%',position:"relative"}}>
      <Slider {...settings}>
        <div>
         <img src="https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg" alt="" style={{width:'100%',height:"100vh"}}/>
            <div className="text" style={{position:"absolute",top:"20px",color:"white"}}> <h1>Hello Krisha</h1></div>
        </div>
        <div>
        <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" alt="" style={{width:"100%",height:"100vh"}}/>
        
        </div>
        <div>
          <img src="http://thewowstyle.com/wp-content/uploads/2015/01/nature-wallpaper-27.jpg" alt="" style={{width:"100%",height:"100vh"}}/>
        </div>
        <div>
        <img src="https://jooinn.com/images/nature-319.jpg" alt="" style={{width:"100%",height:"100vh"}}/>
         
        </div>
        <div>
        <img src="https://jooinn.com/images/lonely-tree-reflection-3.jpg" alt="" style={{width:"100%",height:"100vh"}}/>
         
        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg" alt="" style={{width:"100%",height:"100vh"}}/>
         
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default SimpleSlider;
