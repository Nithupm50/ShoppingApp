import React from 'react'
import {FaBars} from "react-icons/fa"
import {FaRegHeart} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
import '../Components/Navbar.css'

function Navbar() {
  return (
    <div className="nav">

    <div className="bars">
    <FaBars size={"30px"} />
    </div>
    <div className="search">
      <input type="text" className="find" placeholder='search for products brands and more'/>
      <div className="find-icon">
      <FaSearch/>
      </div>
    </div>

    <div className="logo">
    <img src="capricon.png.png" alt="" className="img" />
    </div>
   
    <div className="heart">
   
    <FaRegHeart size={"30px"}/>
    <FaShoppingCart size={"30px"}/>
    </div>
    

    </div>
    
  )
}

export default Navbar