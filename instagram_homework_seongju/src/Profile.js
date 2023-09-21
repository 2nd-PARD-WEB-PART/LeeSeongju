import React from 'react';
import './App.css';

function Profile(){
    return(
        <div className = "profile">
          <img src = "miniProfile.png" alt="메인프로필" className="main_profile"/>
          <img src = "Desc.png" alt="프로필소개내용" className="profile_text"/>
          <div className='post'>3</div>
          <div className='follower'>777</div>
          <div className='follow'>1</div>
        </div>
    )
}
export default Profile;