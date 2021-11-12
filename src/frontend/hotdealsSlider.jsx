import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";
import React, { Component } from "react";
import Slider from "react-slick";
import './hotdealsSlider.css'
import manClothe1 from './imagesMan/manClothe1.jpg'
import manClothe2 from './imagesMan/manClothe2.jpg'
import manClothe3 from './imagesMan/manClothe3..jpg'
import womanClothe1 from './imagesWoman/womanClothe1.jpg'
import womanShoe2 from './imagesWoman/womanShoe2.jpg'


const Hotdeals = () =>{

    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 10000,
    
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="hot-container">
        <h1>Best <span style={{color:"orangered"}}>Sellers</span></h1>
        <Slider {...settings}>

          <div>
          <div className="Hot-images">
            <img src={manClothe1} alt=""/>
            <div className="hotdeals-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="hotIcons"/></a>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>

          <div>
          <div className="Hot-images">
            <img src={manClothe2} alt="" />
            <div className="hotdeals-icons">
            <ShoppingCartOutlined className="hotIcons"/>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>

          <div>
          <div className="Hot-images">
             <img src={womanShoe2} alt=""/>
             <div className="hotdeals-icons">
            <ShoppingCartOutlined className="hotIcons"/>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>

          <div>
          <div className="Hot-images">
            <img src={womanClothe1} alt=""/>
            <div className="hotdeals-icons">
            <ShoppingCartOutlined className="hotIcons"/>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>




          <div>
          <div className="Hot-images">
            <img src={manClothe1} alt=""/>
            <div className="hotdeals-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="hotIcons"/></a>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>

          <div>
          <div className="Hot-images">
            <img src={manClothe2} alt="" />
            <div className="hotdeals-icons">
            <ShoppingCartOutlined className="hotIcons"/>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>

          <div>
          <div className="Hot-images">
             <img src={womanShoe2} alt=""/>
             <div className="hotdeals-icons">
            <ShoppingCartOutlined className="hotIcons"/>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>

          <div>
          <div className="Hot-images">
            <img src={womanClothe1} alt=""/>
            <div className="hotdeals-icons">
            <ShoppingCartOutlined className="hotIcons"/>
            <SearchOutlined className="hotIcons"/>
            <FavoriteBorder className="hotIcons"/>
            </div>
            <h2>Aomei Women Bodycon...</h2>
            <div>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
            </div>
            <h2>₦ 2,000</h2>
          </div>
          </div>

          

          
        </Slider>
      </div>
    );
  }

  export default Hotdeals;