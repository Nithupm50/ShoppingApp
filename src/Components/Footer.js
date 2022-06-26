import React from 'react'

function Footer() {
  return (
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
  )
}

export default Footer