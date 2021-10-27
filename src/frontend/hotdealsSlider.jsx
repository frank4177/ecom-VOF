import React, { Component } from "react";
import Slider from "react-slick";
import './hotdealsSlider.css'
import {HotdealsData} from "./hotdealsData"
import HotdealsItem from "./hotdealsItem"

const Hotdeals = () =>{

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
        {HotdealsData.map((item, index) => {
          return (
            <div item={item} key={index}>{item.title}</div>
            
          )
        })}
        <Slider {...settings}>
          <div >
            <img src="https://www.freepik.com/free-photo/positive-emotions-portrait-happy-young-dark-skinned-man-with-afro-haircut-casual-stylish-outfit-spreading-hands-with-excitement-screaming-cheering-favorite-football-team_8919422.htm#page=1&query=man%20excited&position=4&from_view=search" alt="ld" />
          </div>
          <div>
            <h3>s</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }

  export default Hotdeals;