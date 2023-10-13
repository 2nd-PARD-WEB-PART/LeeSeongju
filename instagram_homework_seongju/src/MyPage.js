import React from 'react';
import './App.css';
import Profile from './Profile.js';
import Post from './Post.js';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';

function MyPage(props){
    return(
        <div className = "whole_body">
            <div className = "body">
                <div className = "insta_logo">
                    <img src = "/Navigations.png" />
                    <img src = "NewPosts.png" alt ="더하기로고" className="plus_logo"/>
                    <Link to="/edit-profile">
                        <img src = "miniProfile.png" alt ="작은프로필" className="mini_profile"/>
                    </Link>
                </div>

            <div>
                <Profile user={props.user}/>
            </div>

            <div>
                <Post/>
            </div>
        </div>
    </div>
    )
}

export default MyPage