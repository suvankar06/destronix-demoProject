import React from 'react'
import Header from './Header'
import './Profile.css'
const Profile=() => {
    function update()
{
    alert("Profile Updated Successfully")
}
  return (
      <>
      <Header/>
      <div className='heading'>
          <h1>MY PROFILE</h1>
      </div>
    <div className='profile'>
      <div className='profile-wrapper'>
          <div>
              <img src="./images/image10.jpg" />
          </div>
          <div className='profile-content'>
              <h4> Name: Suvankar Singh</h4>
              <h4> email id: suvankarxavi.singh06@gmail.com</h4>
              <h4> Phone number: +91 6290186193</h4>
              <h4> Username: Suvankar </h4>
              <button onClick={update} className="btn btn-primary">Update</button>
          </div>
      </div>
    </div>

    </>
  )
}

export default Profile
