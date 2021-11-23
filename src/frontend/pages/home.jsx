import React from "react";
import Navbar from '../navbar'
import SimpleSlider from '../slider'
import Hotdeals from '../hotdealsSlider'
import Newsletter from '../newsletter'
import Footer from '../footer'
import FeaturedCategories from '../featuredCategories'

const Home = () => {
    return (
      <div className="App">
       {/* <Navbar/> */}
       <SimpleSlider/>
       <Hotdeals/>
       <FeaturedCategories/>
       <Newsletter/>
       <Footer/>
      </div>
    );
  }
  
  export default Home;