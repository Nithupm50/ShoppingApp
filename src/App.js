import './App.css';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Flash from './Components/Flash';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
// import NewArrival from './Components/NewArrival.Js';
import Offer from './Components/Offer';


function App() {
  
 
 return (
    
    <div className="App">
      <Navbar/>
      <Banner/>
      <Category/>
      <Offer/>
      <Flash/>
      {/* <NewArrival/> */}
      <div className="section2">
        
        <div className="head3">
         <h1 className="title">New In This Season</h1>
         <p className='sub-title'>Visit our shop to see amazing creations from our fashion house</p>
      </div>
   
      <div className="hover">
       <div className="card1">
       <img src="khaki.webp" alt="" className="girl" />
       <h3 className="name">100% cotton shirt</h3>
       <h3 className="name">Rs. 3,590.00</h3>
       <div className="stars">
         <img src="Vector.png" alt="/" />
         <img src="Vector.png" alt="/" />
         <img src="Vector.png" alt="/" />
         <img src="Vector.png" alt="/" />
         <img src="Vector 1.png" alt="/" />
       </div>
       <button className="cart">Add to Cart</button>
       </div>
       <div className="card2">
       <img src="top.webp" alt="" className="girl1" />
       <h3 className="name">Long-sleeved t-shirt with sequins</h3>
       <h3 className="name">Rs. 3,590.00</h3>
       <div className="stars">
         <img src="Vector.png" alt="/" />
         <img src="Vector.png" alt="/" />
         <img src="Vector.png" alt="/" />
         <img src="Vector.png" alt="/" />
         <img src="Vector 1.png" alt="/" />
       </div>
       <button className="cart">Add to Cart</button>
       </div>
   
       
       </div>
       <hr className='line'/>
      
      </div>
      <Newsletter/>

      <div className="logo3">
       <img src="logo2.png" alt="" className="logo1" />
       </div>
     
      <Footer/>
    </div>
  );
}

export default App;
