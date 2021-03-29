import React from 'react'
import Header from './Header'
import './Profile.css'
function Wallet() {
function payment()
{
    alert("Payment Successfull")
}
  return (
      <>
       <Header/>
       <div className='heading'>
          <h1>MY WALLET</h1>
      </div>
      <div className='profile'>
      <div className='profile-wrapper'>
          <div>
              <img src="./images/image11.png" />
          </div>
          <div className='profile-content'>
              <h4> Name: Suvankar Singh</h4>
              <h4>Total Rent Amount Paid Till Date: $210</h4>
              <h4>Outstanding Amount: $50</h4>
              <button onClick={payment} className="btn btn-primary">Pay Now</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Wallet
