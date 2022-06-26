import React from 'react'
import '../Components/Newsletter.css'
import {FaTelegramPlane} from "react-icons/fa"




function Newsletter() {
  return (
    <div className="news">
        <div className="news_title">
         <h1 className="heading">NEWS LETTER</h1>
         <p className="sub_title">Get timely updates from your favourite Products</p>
         </div>
         <div className="input">
         <input className='email' type="email" placeholder="your email"/>
         <div className="icon">
        <FaTelegramPlane size={"30px"}/>
        </div>

        </div>
         </div>
         
    
  )
}

export default Newsletter