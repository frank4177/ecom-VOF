import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import './cart.css'
import styled from 'styled-components'
import manClothe1 from '../imagesMan/manClothe1.jpg'
import { Add, Remove } from "@material-ui/icons";


const Topbutton = styled.button` padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type === "filter" && "none"};
    background-color:${props=>props.type === "filter" ? "orange" : "tranparent"};
    color:${props=>props.type === "filter" && "white"};`

const Cart = () => {

    return ( 
        <>
        {/* <Navbar/> */}
        <div className="cart-container">
            <div className="cart-wrapper">
                <h1>YOUR BAG</h1>
                <div className="top">
                    <Topbutton>CONTINUE SHOPPING</Topbutton>
                    <div className="topText">
                        <h2>Shopping Bag (2)</h2>
                        <h2>Your Wishlist (0)</h2>
                    </div>
                    <Topbutton type="filter">CHECKOUT NOW</Topbutton>
                </div>
                <div className="bottom">
                <div className="info">
                    <div className="product">
                        <div className="productDetail">
                            <img src={manClothe1} alt="" />
                            <div className="details">
                                <div className="productName"><b>PRODUCT:</b> VELVET MARION SHOES</div>
                                <div className="productID"><b>ID:</b>87875687675</div>
                                <div className="productColor"></div>
                                <div className="productSize"><b>Size:</b>37.5</div>
                            </div>
                        </div>
                        <div className="priceDetail">
                            <div className="productAmountContainer">
                                <Add style={{fontSize:"20px"}}/>
                                <div className="productAmount">2</div>
                                <Remove style={{fontSize:"20px"}}/>
                            </div>
                            <div className="productPrice">$ 30</div>
                        </div>
                    </div>
                    <hr style={{marginTop:"15px", width:"90%", marginBottom:"15px"}}/>
                    <div className="product">
                        <div className="productDetail">
                            <img src={manClothe1} alt="" />
                            <div className="details">
                                <div className="productName"><b>PRODUCT:</b> KEENO SHORTS</div>
                                <div className="productID"><b>ID:</b>87875687675</div>
                                <div className="productColor"></div>
                                <div className="productSize"><b>Size:</b>M</div>
                            </div>
                        </div>
                        <div className="priceDetail">
                            <div className="productAmountContainer">
                                <Add style={{fontSize:"20px"}}/>
                                <div className="productAmount">2</div>
                                <Remove style={{fontSize:"20px"}}/>
                            </div>
                            <div className="productPrice">$ 20</div>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <div className="summaryTitle">ORDER SUMMARY</div>
                    <div className="summaryItem">
                        <div className="summaryItemText">Subtotal:</div>
                        <div className="summaryItemText">$ 80</div>
                    </div>
                    <div className="summaryItem">
                        <div className="summaryItemText">Estimated Shipping:</div>
                        <div className="summaryItemText">$ 5.90</div>
                    </div><div className="summaryItem">
                        <div className="summaryItemText">Shipping Discount:</div>
                        <div className="summaryItemText">$ -5.90</div>
                    </div>
                    <div className="summaryItemBold">
                        <div className="summaryItemText">Total</div>
                        <div className="summaryItemText">$ 80</div>
                    </div>
                    <button className="summaryButton">CHECKOUT NOW</button>
                </div>
                
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Cart;