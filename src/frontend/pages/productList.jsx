import React from "react";
import Navbar from "../navbar";
import './ProductList.css'
import Newsletter from "../newsletter";
import Footer from "../footer";
import womanShoe2 from '../imagesWoman/womanShoe2.jpg'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";

const ProductList = () => {
    return ( 
        <div>
            <Navbar/>
            {/* <h1 className="dresses">Dresses</h1> */}
            <div className="filterContainer">
              <div className="filter">
                  <div className="filterText">Filter Products:</div>
                   <select name="Color" id="">
                    <option value="" disabled selected>Color</option>
                    <option value="">White</option>
                    <option value="">Black</option>
                    <option value="">Blue</option>
                    <option value="">Yellow</option>
                    <option value="">green</option>

                   </select>
                   <select name="Color" id="">
                    <option value="" disabled selected>Size</option>
                    <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>

                   </select>
              </div>
              <div className="filter">
                  <div className="filterText">Sort Products:</div>
                  <select name="" id="">
                      <option value="" selected>Newest</option>
                      <option value="">Price (asc)</option>
                      <option value="">Price (desc)</option>
                  </select>
              </div>
            </div>



                
            <div className="ProductFeatured-container">
            <h1>Women <span style={{color:"orangered"}}>Shoes</span></h1>
            <div className="ProductImage-container">


            <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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


          <div className="ProductFeature-images">
            <img src={womanShoe2} alt=""/>
            <div className="ProductFeatureCat-icons">
            <a href="google.com" style={{textDecoration:"none", color:"black"}}><ShoppingCartOutlined className="ProductFeatureIcons"/></a>
            <SearchOutlined className="ProductFeatureIcons"/>
            <FavoriteBorder className="ProductFeatureIcons"/>
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
        </div>
        
        {/* import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
} */}

                <Newsletter/>
                <Footer/>
        </div>
     );
}
 
export default ProductList;