import React from 'react'
import { useState, useEffect, useRef } from 'react';

function Category() {

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
    <div className="category">

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
        <img src="shirts.webp" alt="" className="imgs" />
        <h2 className="drs">Shirt Styles</h2>
        <p className="wrd">150 items</p>
        </div>
        <div className="four">
        <img src="partywear.avif" alt="" className="imgs" />
        <h2 className="drs">Suit Sets</h2>
        <p className="wrd">200 items</p>
        </div>
        <div className="five">
        <img src="jackets.jpeg" alt="" className="imgs" />
        <h2 className="drs">Jackets</h2>
        <p className="wrd">50 items</p>
      
        </div>
        <img src='vector 2.png' className='arrow1' onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, 350);
          }}/>
        
       
        
      </div>
     

        <hr/>
     </div>
    </div>
     
  )
}

export default Category