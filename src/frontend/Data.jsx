
import React from 'react'
import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined, StarRate, StarBorderRounded, StarRounded } from "@material-ui/icons";

export const CategoryMenus = [
{
title:"Men Fashion",
 Menus:[

  {id:1,
  cat:'clothing',
  path:''
  },

  {id:2,
  cat:'shoes',
  path:''
  },

  {
    cat:'Bags & Wallets',
    path:'shoes'
    }, 

    {
    cat:'Watches',
    path:'/shoes'
    },
  
     {
        cat:'Sunglasses',
        path:'/shoes'
        },

      ],

      },

 {
  title:"Women Fashion",
         Menus:[
        
          {
          cat:'clothing',
          path:'/shoes'
          },
        
          {
          cat:'shoes',
          path:'/shoes'
          },
        
          {
            cat:'Bags & Wallets',
            path:'/shoes'
            },
        
            {
            cat:'Watches',
            path:'/shoes'
            },
          
             {
                cat:'Sunglasses',
                path:'/shoes'
                },
        
              ],
        
              },
]


export const ProductsData = [
  {
    id:1,
    title:"Air Jordan 87",
    img: "https://image.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg",
    price:"₦ 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },
  {
    id:2,
    title:"Air Jordan 87",
    img: "https://image.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg",
    price:"₦ 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },
  {
    id:3,
    title:"Lorie Blouse",
    img: "https://image.freepik.com/free-vector/vintage-blue-blouse-vector-remix-from-artwork-by-fred-hassebrock_53876-116284.jpg",
    price:"₦ 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },
  {
    id:4,
    title:"Air Jordan 87",
    img: "https://image.freepik.com/free-photo/sunglasses_1203-7886.jpg",
    price:"₦ 2,000",
    rating:<div>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    <StarBorderRounded style={{ color:"gold", fontSize:"2.2rem"}}/>
    </div>

  },

]

