import React from "react";
import Navbar from "../navbar";
import './products.css'
import Newsletter from "../newsletter";
import Footer from "../footer";
import womanShoe2 from '../imagesWoman/womanShoe2.jpg'
import { Add, Remove } from "@material-ui/icons";

const Product = () => {
    return ( 
      <div className="Productcontainer">
          <Navbar/>
          <div className="wrapper">
              <div className="ProductImageContainer">
                  <img src={womanShoe2} alt="" />
              </div>
              <div className="InfoContainer">
                  <h1>Paco Shoe</h1>
                  <p className="info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde quod sapiente similique nobis blanditiis necessitatibus alias inventore architecto aspernatur.</p>
                  <div className="price">$ 20</div>
                  <div className="ProductfilterContainer">
                      <div className="Productfilter">
                          <div className="filterTitle">Color</div>
                          <div className="filterColor" style={{background:"gray"}}></div>
                          <div className="filterColor" style={{background:"darkgreen"}}></div>
                          <div className="filterColor" style={{background:"black"}}></div>
                      </div>

                      <div className="Productfilter">
                          <div className="filterTitle">Size</div>
                          <select className="filterSize">
                              <option className="filterSizeOption">XS</option>
                              <option className="filterSizeOption" >S</option>
                              <option className="filterSizeOption">M</option>
                              <option className="filterSizeOption">L</option>
                              <option className="filterSizeOption">XL</option>

                          </select>
                      </div>
                  </div>
                  <div className="addContainer">
                      <div className="amountContainer">
                          <Remove/>
                          <div className="amount">1</div>
                          <Add/>
                      </div>
                      <button>ADD TO CART</button>
                  </div>
              </div>
          </div>
          <Newsletter/>
          <Footer/>
      </div>
     );
}
 
export default Product;