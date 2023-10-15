import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import './App.css';

const InstaLogo = styled.div`
    width:935;
    height:53px;
    margin-top:2%;
`;

const BodyPost = styled.div`
    width:642px;
    height:903px;
    margin-top: 5%;

`;
const PostPicture = styled.div`
    width:614px;
    height:614px;
    margin:0 auto;
    margin-top: 10%;
`;
const PostEmotion = styled.div`
    margin-top: 3%;
`;
const MiddleProfile = styled.img`
    float:left;
    margin-left: 5%;
    margin-top: 4%;
    width:38px;
    height:38px;
    border-radius:22px;
`;
const PostUserId = styled.span`
    position: relative;
    margin-left: 3%;
    font-size: large;
    top:30px;
    font-weight: 470;
`;
const PostHeaderButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    float:right;
    border:none;
    font-weight: bold;
    font-size:large;
    cursor:pointer;
`;
const Comment = styled.div`
margin-top: 4%;
margin-bottom: 4%;
padding-bottom:4%;
`;
const SmileImg = styled.img`
    height:20px;
    width:20px;
`;

const WriteComment = styled.label`
    margin-left: 3%;
    font-size: large;
    font-weight: bold;
    padding-bottom: 2%;
`;

const WriteBox = styled.input`
    margin-left: 3%;
    width:70%;
    height:30px;
    border:none;
`;
const SubmitButton = styled.button`
    background-color: white;
    color:dodgerblue;
    border:none;
    font-size: large;
    cursor:pointer;
    margin-left: 10%;
`;

function Home({user}){
    const [likeCount, setLikeCount] = useState(285);
    const [commentLikeCount, setCommentLikeCount] = useState(0);
    const [newCommentLikeCount, setNewCommentLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isCommentLiked, setIsCommentLiked] = useState(false);
    const [isNewCommentLiked, setIsNewCommentLiked] = useState(false);
    const [newComment, setNewComment] = useState(""); // 댓글 입력 상태
    const [comments, setComments] = useState([]); // 댓글 목록 상태

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setIsLiked(!isLiked);
    }
    const handleCommentLikeClick = () => {
        if (!isCommentLiked) {
            setCommentLikeCount(commentLikeCount + 1);
        } else {
            setCommentLikeCount(commentLikeCount - 1);
        }
        setIsCommentLiked(!isCommentLiked);
    }
    const handleNewCommentLikeClick = () => {
        if (!isNewCommentLiked) {
            setNewCommentLikeCount(newCommentLikeCount + 1);
        } else {
            setNewCommentLikeCount(newCommentLikeCount - 1);
        }
        setIsNewCommentLiked(!isNewCommentLiked);
    }

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    }

    const handleCommentSubmit = () => {
        if (newComment.trim() !== "") {
          setComments([...comments, newComment]);
          setNewComment("");
        }
      };
    return(
        <div className="whole_body">
            <div className="body">
                <InstaLogo>
                    <Link to="/home">
                        <button style={{backgroundColor:'white', border:'none',cursor:'pointer'}}><img src = "Logo.png" /></button>
                        <button className='home_button'><img src = "Menu-Button-Item.png" alt ="홈로고"/></button>
                    </Link>
                    <button className='header_heart'><img src='heart_icon.png' alt="헤더하트"></img></button>
                    <img src = "NewPosts.png" alt ="더하기로고" className="plus_logo"/>
                    <Link to="/">
                        <img src = "miniProfile.png" alt ="작은프로필" className="mini_profile"/>
                    </Link>
                </InstaLogo>

                <BodyPost>
                    <div className="postHader">
                        <span><MiddleProfile src = "miniProfile.png" alt ="중간프로필" /></span>
                        <PostUserId>katarinabluu</PostUserId>
                        <div><PostHeaderButton>' ' '</PostHeaderButton></div>
                    </div>
                    <PostPicture>
                        <img src="HipCat.png" alt="게시물 사진" className='post_picture' />
                    </PostPicture>
                    <div className="postFooter">
                        <PostEmotion>
                            <span><button onClick={handleLikeClick} className="heart_button">
                                {isLiked
                                    ? <img src="Vector.png" alt="" className="redheart_icon"/>
                                    : <img src="like.png" alt="" className="heart_icon" />
                                }
                            </button></span>
                            <button style={{backgroundColor:"white", border:"none"}}><img src="CommentIcon.png"></img></button>
                            <button style={{backgroundColor:"white", border:"none"}}><img src="SharePosts.png" id="sharePost"></img></button>

                        </PostEmotion>

                        <div className="likeNum">
                            <p>좋아요 {likeCount} 개</p>
                        </div>

                        <div className="postComment">
                            
                            <div className="commentList">
                                <span style={{fontWeight:'bold'}}>b2_ang</span>
                                <span> 빵빵아! </span><br></br>
                                <span style={{ color: "grey" }}>좋아요 {commentLikeCount} 개</span>
                                <span><button onClick={handleCommentLikeClick} className="comment_heart_button">
                                {isCommentLiked
                                    ? <img src="redHeart.png" alt="" className="comment_redheart_icon"/>
                                    : <img src="heart_icon.png" alt="" className="comment_heart_icon" />
                                }
                            </button></span>
                            </div>
                            
                            {comments.map((comment, index) => (
                                <div className="commentList" key={index}>
                                <span style={{ fontWeight: "bold" }}>sj_mon</span>
                                <span> {comment} </span>
                                <br></br>
                                <span style={{ color: "grey" }}>좋아요 {newCommentLikeCount} 개</span>
                                <span><button onClick={handleNewCommentLikeClick} className="comment_heart_button">
                                {isNewCommentLiked
                                    ? <img src="redHeart.png" alt="" className="comment_redheart_icon"/>
                                    : <img src="heart_icon.png" alt="" className="comment_heart_icon" />
                                }
                            </button></span>
                                </div>
                            ))}

                            <Comment>
                                <SmileImg src="Smile.png"></SmileImg>
                                <WriteBox type="text" placeholder="댓글달기..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></WriteBox>
                                <SubmitButton onClick={handleCommentSubmit} >게시 </SubmitButton>
                            </Comment>

                        </div>

                    </div>
                </BodyPost>
            </div>

        </div>

    );
}

export default Home;