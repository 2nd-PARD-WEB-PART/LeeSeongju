import React from 'react';
import './App.css';
/*import를 하지 않고 public폴더에 사진 넣어두고 꺼내 쓰는 방식 사용. */

function App() {
  return (
    <div className = "whole_body">
      <div className = "body">
        <div className = "insta_logo">
          <img src = "/Navigations.png" />
          <img src = "NewPosts.png" alt ="더하기로고" className="plus_logo"/>
          <img src = "miniProfile.png" alt ="작은프로필" className="mini_profile"/>
        </div>

        <div className = "profile">
          <img src = "miniProfile.png" alt="메인프로필" className="main_profile"/>
          <img src = "Desc.png" alt="프로필소개내용" className="profile_text"/>
          <div className='post'>3</div>
          <div className='follower'>777</div>
          <div className='follow'>1</div>
        </div>

        <div className='post'>
          <img src ="Toogle.png" alt="헤더메뉴" className='header_menu'/>
          <img src="HipCat.png" alt="파드사진1" className='peed1'/>
          <img src="234.png" alt="파드사진2" className='peed2'/>
          <img src="Original.png" alt="파드로고" className='pard_logo'/>
          <img src="HipCat2.png" alt="피드사진3" className='peed3'/>
        </div>
      </div>
    </div>

  );
}

export default App;
