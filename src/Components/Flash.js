import React from 'react'
import { useState, useRef, useEffect } from 'react'
import '../Components/Flash.css'
import {FaRegHeart} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
 

function Flash() {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    return {
      total, hours, minutes, seconds
      };
      }
      const startTimer = (e) => {
      let { total, hours, minutes, seconds }
      = getTimeRemaining(e);
      if (total >= 0) {
      setTimer(
      (hours > 9 ? hours : '0' + hours) + ':' +
      (minutes > 9 ? minutes : '0' + minutes) + ':'
      + (seconds > 9 ? seconds : '0' + seconds)
      )
      }
      }
      const clearTimer = (e) => {
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
      startTimer(e);
      }, 1000)
      Ref.current = id;
      }
      const getDeadTime = () => {
      let deadline = new Date();
      deadline.setHours(deadline.getHours() + 60);
      // deadline.setMinutes(deadline.getMinutes() + 60);
      //  deadline.setSeconds(deadline.getSeconds() + 10);
      return deadline;
      }
      useEffect(() => {
      clearTimer(getDeadTime());
      }, []);
  return (
    <div className="flash">
        <div className="flash_title">
          <h1 className="deal">FLASH DEALS</h1>
          <p className="end">Sale Ends in</p>
          </div>

        <div className="timer">
        <h2>{timer}</h2>
        </div>

        <div className="deals">
        <div className="two"> 
        <img src="tshirts.webp" alt="" className="imags" />
         <info>
          <icon>
            <FaRegHeart/>
          </icon>
          <icon>
            <FaShoppingCart/>
          </icon>
          <icon>
            <FaSearch/>
          </icon>
        </info>
        <p className="drss">Frills cotton t-shirt</p>
        <h3 className="wrdd">-50% <span className="price">Rs.895</span></h3>
        </div>

        <div className="six">
        <img src="tee.webp" alt="" className="imags" />
        <info>
          <icon>
            <FaRegHeart/>
          </icon>
          <icon>
            <FaShoppingCart/>
          </icon>
          <icon>
            <FaSearch/>
          </icon>
        </info>
        <p className="drss">Essential cotton-blend T-shirt</p>
        <h3 className="wrdd">-58% <span className="price">Rs.500</span></h3>
        </div>

        <div className="three">
        <img src="yellow.webp" alt="" className="imags" />
        <info>
          <icon>
            <FaRegHeart/>
          </icon>
          <icon>
            <FaShoppingCart/>
          </icon>
          <icon>
            <FaSearch/>
          </icon>
        </info>
        <p className="drss">Recycled cotton log t-shirt</p>
        <h3 className="wrdd">-50% <span className="price">Rs.295</span></h3>
        </div>

        <div className="four">
        <img src="brown.webp" alt="" className="imags" />
        <info>
          <icon>
            <FaRegHeart/>
          </icon>
          <icon>
            <FaShoppingCart/>
          </icon>
          <icon>
            <FaSearch/>
          </icon>
        </info>
        <p className="drss">Long sleeve T-shirt</p>
        <h3 className="wrdd">-58% <span className="price">Rs.400</span></h3>
        </div>

        <div className="five">
        <img src="white.webp" alt="" className="imags" />
        <info>
          <icon>
            <FaRegHeart/>
          </icon>
          <icon>
            <FaShoppingCart/>
          </icon>
          <icon>
            <FaSearch/>
          </icon>
        </info>
        <p className="drss">Logo cotton T-shirt</p>
        <h3 className="wrdd">-50% <span className="price">Rs.395</span></h3>
        </div>

      




        </div>

        <hr className='line'/>
      </div>
  )
}

export default Flash