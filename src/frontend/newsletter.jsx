import { Send } from '@material-ui/icons';
import React from 'react'
import './newsletter.css'

const Newsletter = () => {
    return ( 
        <div className="newsLetter-container">
            <h1>Newsletter</h1>
            <div className="description">Get timely updates of your favorite products</div>
            <form action="" className="searchForm">
                <input type="text" className="searchBox" placeholder="Your email"/>
                <Send className="searchLogo"/>
            </form>
        </div>
     );
}
 
export default Newsletter;