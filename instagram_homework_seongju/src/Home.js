import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import './App.css';

const BodyPost = styled.div`
    width:642px;
    height:903px;
    margin-top: 20%;

`;
const PostPicture = styled.div`
    width:614px;
    height:614px;
    margin:0 auto;
    margin-top: 10%;
`;
const PostEmotion = styled.div`
    margin-top: 5%;
`;
function Home(){
    const [likeCount, setLikeCount] = useState(285);
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setIsLiked(!isLiked);
    }
    

    return(
        <div className="whole_body">
            <div className="body">
                <div className = "insta_logo">
                    <Link to="/">
                        <img src = "/Navigations.png" />
                    </Link>
                    
                    <img src = "NewPosts.png" alt ="더하기로고" className="plus_logo"/>
                    <Link to="/edit-profile">
                        <img src = "miniProfile.png" alt ="작은프로필" className="mini_profile"/>
                    </Link>
                </div><br></br>

                <BodyPost>
                    <div className="postHader">
                        <span><img src = "miniProfile.png" alt ="중간프로필" className="middle_profile"/></span>
                        <span className="postUserId">sj_mon_</span>
                        <button className="postHeaderButton">' ' '</button>
                    </div>
                    <PostPicture>
                        <img src="HipCat.png" alt="게시물 사진" className='post_picture'/>
                    </PostPicture>
                    <div className="postFooter">
                        <PostEmotion>
                            <span><button onClick={handleLikeClick} className="heart_button">
                                {isLiked
                                    ? <img src="Vector.png" alt="" className="heart_icon" />
                                    : <img src="like.png" alt="" className="heart_icon" />
                                }
                            </button></span>

                        </PostEmotion>
                        <div className="likeNum">
                            <p>좋아요 {likeCount} 개</p>

                        </div>
                        <div className="postComment">

                        </div>

                    </div>
                </BodyPost>
            </div>

        </div>

    );
}

export default Home;