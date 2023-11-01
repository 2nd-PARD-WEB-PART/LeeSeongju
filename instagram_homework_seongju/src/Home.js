import React, {useState,useContext} from "react";
import { MyContext } from "./App";
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
    margin-left: 13%;
`;
const RightPart = styled.div`
    width:293px;
    height:100%;
    margin-left: 110%;
    margin-top:-150%;

`;
const RightPartProfile = styled.img`
    width:56px;
    height:56px;
    border-radius: 57px;
`;
const RightPartId = styled.p`
    margin-top: -15%;
    margin-left: 30%;
    font-size: large;
`;

function Home({user}){
    const {MyData, setUser,
        likeCount,setLikeCount,
        isLiked, setIsLiked,
        comments, setComments} = useContext(MyContext);

    const [commentLikeCount, setCommentLikeCount] = useState(0); /**댓글 좋아요 수 설정 */
    const [newCommentLikeCount, setNewCommentLikeCount] = useState(0); /**새로운 댓글 좋아요 수 설정  */
    const [isCommentLiked, setIsCommentLiked] = useState(false);/** 댓글 좋아요 눌러져있는지 확인. 초기값 false */
    const [isNewCommentLiked, setIsNewCommentLiked] = useState(false);/** 새로운 댓글 좋아요 눌러져있는지 확인. 초기값 false */
    const [newComment, setNewComment] = useState(""); /** 댓글 입력 상태 */

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
            setUser({
                name: MyData.name,
                introduce: MyData.introduce,
                site: MyData.site,
                email: MyData.email,
                gender: MyData.gender,
            });
        } else {
            setLikeCount(likeCount - 1);
            setUser({
                name: MyData.name,
                introduce: MyData.introduce,
                site: MyData.site,
                email: MyData.email,
                gender: MyData.gender,
            });
        }
        setIsLiked(!isLiked);
    }/*처음에는 좋아요 버튼이 눌러져있는 지 확인 후 
    안눌러져있다면 좋아요 숫자롤 하나 증가. 눌러져있으면 좋아요 숫자 감소 
    하트가 눌러져있으면 계속해서 if상태임. 다시누르면 else상태
    그래서 맨마지막에 다시 setIsLiked(!isLiked)*/
    const handleCommentLikeClick = () => {
        if (!isCommentLiked) {
            setCommentLikeCount(commentLikeCount + 1);
        } else {
            setCommentLikeCount(commentLikeCount - 1);
        }
        setIsCommentLiked(!isCommentLiked);
    }/*처음에는 댓글 좋아요 안달려있 지 확인. 안달려 있으면 추가
    달려있다면 감소  위 좋아요 수랑 똑같이 구성함*/
    const handleNewCommentLikeClick = () => {
        if (!isNewCommentLiked) {
            setNewCommentLikeCount(newCommentLikeCount + 1);
        } else {
            setNewCommentLikeCount(newCommentLikeCount - 1);
        }
        setIsNewCommentLiked(!isNewCommentLiked);
    }/* 댓글 좋아요에 새로운 댓글 추가 좋아요 버전 */

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    }/*사용하지 않았음 */

    const handleCommentSubmit = () => {
        if (newComment.trim() !== "") {
          setComments([...comments, newComment]);
          setNewComment("");
        }
      }; /*댓글 추가하는 기능 
      trim은 새로운 댓글이 공백이 아닌 문자열인지 확인. 
      trim은 양 끝 공백 제거 그리고 !==""로 결과가 비어있지 않는 문자열인지 확인
      setComments([...comments, newComment]) 이거는 현재 댓글 배열에 끝에 새로운 댓글을 추가함
      ...은 배열 연산자로서 comment배열 뒤에 newcomment를추가한다는 듯
      setNewComment("")이걸 해줘야 다음 댓글 쓸 때 비어있음. 아니면 이전 댓글내용이 나옴*/

      /** map 부분은 comment배열을 돌아다니면서 key값으로 index를 받음
      index는 자동으로 증가하면서 순회함. 새로운 댓글 추가하면 comments배열에 댓글생성
      span comment로 되어있는 부분이 현재 적힌 댓글들 목록을 다 보여줌 */ 
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
                            <button style={{backgroundColor:"white", border:"none"}} id="savePost"><img src="Save.png" ></img></button>

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

                        <RightPart>
                            <RightPartProfile src="miniProfile.png"></RightPartProfile>                
                            <RightPartId>sj_mon_</RightPartId>
                        </RightPart>

                    </div>
                </BodyPost>
            </div>

        </div>

    );
}

export default Home;