import React, {Component} from "react";
import Slider from "react-slick";
import './body.css'
import showcaseImageOne from '../frontend/showcasImageOne.jpg'
import showcaseImageTwo from '../frontend/showcaseImageTwo.jpg'
import showcaseImageThree from '../frontend/showcaseImageThree.jpg'
import showcaseImageFour from '../frontend/showcaseImageFour.jpg'
import showcaseImageFive from '../frontend/showcaseImageFive.jpg'
import showcaseImageSix from '../frontend/showcaseImageSix.jpg'
import { BluetoothSearchingOutlined, ViewListOutlined } from "@material-ui/icons";
import { useState } from "react";
import  {CategoryMenus}  from "./categoryMenus";
import CategorySubMenus from './categorySubMenus'





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: 30 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft:30, background:"blue"}}
      onClick={onClick}
    />

  );
}

function SimpleSlider()  {

  
   
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)



    return (
  <div className="container">
      <div className="categories">
          <div className="catHeader">
            <h2 style={{ display:"flex", alignItems:"center",  color:"black", justifyContent:"center"}}> CATEGORIES</h2>
          </div>
            {CategoryMenus.map((item, index) =>{
              return (
                <CategorySubMenus item={item} key={index}/>
              )

              
            })}
     
      </div>

      <div className="showcase">
        <Slider {...settings}>
          <div>
             <div className="image">
             <img src={showcaseImageOne} alt="" />

             </div>

          </div>

          <div className="image">
              <img src={showcaseImageTwo} alt="" />

             </div>

          <div>

          <div className="image">
              <img src={showcaseImageThree} alt="" />

             </div>
          </div>
          
          <div>
          <div className="image">
              <img src={showcaseImageFour} alt="" />

             </div>
          </div>

          <div>
          <div className="image">
              <img src={showcaseImageFive} alt="" />

             </div>
          </div>

          <div>
          <div className="image">
              <img src={showcaseImageSix} alt="" />

             </div>
          </div>
        </Slider>
      </div>
  </div>
    );
    
    }


    export default SimpleSlider;
