import {FaBars} from "react-icons/fa"
import {FaRegHeart} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"

import { useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
 
  const [scroll, setScroll] = useState(0)



  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })


  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
 
  const contentWrapper = useRef(null);
  

  return (
    
    <div className="App">

     <div className="nav">
     <div className="bars">
     <FaBars size={"30px"} />
     </div>
     <div className="logo">
     <img src="capricon.png.png" alt="" className="img" />
     </div>
     <div className="heart">
    
     <FaRegHeart size={"30px"}/>
     <FaShoppingCart size={"30px"}/>
     </div>
    

     </div>

     <div className="banner">
      <div className='des-div'>
       <h1 className="head">EXPLORE <br/> <span className="extn">YOUR STYLE</span></h1>
        <p className="para">Refresh your style with on-trend <br/>pieces from our best clothing collection</p>
        <button className="btn">SHOP NOW</button>
        </div>
        <div className="image">
          <img src="girl1.png" alt="" className="img1" />
        </div>

     </div>
     <div className="scroll">
      <div className='title-div'>
      <h1 className="title">FEATURED CATEGORIES</h1>
      <p className='sub-title'>Visit our shop to see amazing creations from our fashion house</p>
      </div>
      <div className="scroll-img" ref={contentWrapper}>
      <img src='vector 3.png' className='arrow'  onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, -350);
          }} /> 
         <div className="two"> 
        <img src="whitedressgirl.jpg" alt="" className="imgs" />
        <h2 className="drs">Summer Dress</h2>
        <p className="wrd">55 items</p>
        </div>
        <div className="three">
        <img src="whitedressgirl.jpg" alt="" className="imgs" />
        <h2 className="drs">Summer Dress</h2>
        <p className="wrd">55 items</p>
        </div>
        <div className="four">
        <img src="whitedressgirl.jpg" alt="" className="imgs" />
        <h2 className="drs">Summer Dress</h2>
        <p className="wrd">55 items</p>
        </div>
        <div className="five">
        <img src="whitedressgirl.jpg" alt="" className="imgs" />
        <h2 className="drs">Summer Dress</h2>
        <p className="wrd">55 items</p>
      
        </div>
        <img src='vector 2.png' className='arrow1' onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, 350);
          }}/>
        
       
        
      </div>
     

        <hr/>
     </div>

     <div className="section">
     <div className="ootd">
      <img src="girl2.png" alt="" className="pic2" />

     </div>
     <div className="txt0">
      <h1 className="titl">Trendy Outfit <br/>of the day</h1>
      <p className="words">Refesh your style with on-trend pieces from our <br/>best clothing collection. It was popularised in the <br/>1960s with the release of Letraset sheets containing <br/> Lorem Ipsum </p>
     </div>
     <hr className='line'/>
     </div>
    
      <div className="section2">
        
     <div className="head3">
      <h1 className="title">New In This Season</h1>
      <p className='sub-title'>Visit our shop to see amazing creations from our fashion house</p>
   </div>

   <div className="hover">
    <div className="card1">
    <img src="image 6.png" alt="" className="girl" />
    <h3 className="name">Women's Jacket</h3>
    <h3 className="name">$: 25.00</h3>
    <div className="stars">
      <img src="Vector.png" alt="/" />
      <img src="Vector.png" alt="/" />
      <img src="Vector.png" alt="/" />
      <img src="Vector.png" alt="/" />
      <img src="Vector 1.png" alt="/" />
    </div>
    </div>
    <div className="card2">
    <img src="image 7.png" alt="" className="girl1" />
    <h3 className="name">Women's Long Top</h3>
    <h3 className="name">$: 22.00</h3>
    <div className="stars">
      <img src="Vector.png" alt="/" />
      <img src="Vector.png" alt="/" />
      <img src="Vector.png" alt="/" />
      <img src="Vector.png" alt="/" />
      <img src="Vector 1.png" alt="/" />
    </div>
    </div>

    
    </div>
    <div className="logo3">
    <img src="logo2.png" alt="" className="logo1" />
    </div>

    <div className="footer">
      <h3 className="follow">Follow Us</h3>
      <div className="logos">
      <img src="logo2.png" alt="" className="logo2" />
      
      </div>
      <div className="sm">
      <img src="insta.png" alt="" className="media" />
      <img src="twitter.png" alt="" className="media" />
      <img src="FB.png" alt="" className="media" />

      </div>
      <div className="items">
        <div className="headings">
        <div className="pro-items">
          <h2 className="pro">Products</h2>
          <p className='pro1'>Price Drop</p>
          <p className='pro1'>Best Sale</p>
          <p className='pro1'>New Product</p>
          <p className='pro1'>New Season</p>
          <p className='pro1'>New Arrival</p>
         </div>
         <div className="pro-items">
          <h2 className="pro">About Us</h2>
          <p className='pro1'>Price Drop</p>
          <p className='pro1'>Best Sale</p>
          <p className='pro1'>New Product</p>
          <p className='pro1'>New Season</p>
          <p className='pro1'>New Arrival</p>
         </div>
         <div className="pro-items">
          <h2 className="pro">Information</h2>
          <p className='pro1'>Price Drop</p>
          <p className='pro1'>Best Sale</p>
          <p className='pro1'>New Product</p>
          
         
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  );
}

export default App;
