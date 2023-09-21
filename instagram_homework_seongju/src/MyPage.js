import React from 'react';
import './App.css';
import Profile from './Profile.js';
import Post from './Post.js';

function MyPage(){
    return(
        <div className = "whole_body">
        <div className = "body">
            <div className = "insta_logo">
                <img src = "/Navigations.png" />
                <img src = "NewPosts.png" alt ="더하기로고" className="plus_logo"/>
                <img src = "miniProfile.png" alt ="작은프로필" className="mini_profile"/>
            </div>

            <div>
                <Profile/>
            </div>

            <div>
                <Post/>
            </div>
        </div>
    </div>
    )
}

export default MyPage