import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const SideBar = styled.span`
    position:absolute;
    width: 220px;
    height:647px;
    margin-left: 15%;
    margin-top: 15%;
`;
const SideEditProfile = styled.div`
  
  background-color: skyblue;
`;

const EditForm = styled.div`
    position: absolute;
    float:center;
    margin-top: 15%;
`;

function EditProfile(props){
    /*여기서 값을 수정할 수 있는 변수 선언 위해 useState사용 */
    const [userName, setUserName] = useState(props.user.name)
    const [userIntroduce, setUserIntroduce] = useState(props.user.introduce)
    const [userSite, setUserSite] = useState(props.user.site)
    const [userEmail, setUserEmail] = useState(props.user.email)
    const [userGender, setUserGender] = useState(props.user.gender)

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
        console.log(event.target.value)
    }
    const handleUserIntroduceChange = (event) => {
        setUserIntroduce(event.target.value);
    }
    const handleUserSiteChange = (event) => {
        setUserSite(event.target.value);
    }
    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    }
    const handleUserGenderChange = (event) => {
        setUserGender(event.target.value);
    }
    const handlerSubmitChange = (event) => {
        event.preventDefault();
        console.log(userName)
        props.onchange({
            name: userName,
            introduce: userIntroduce,
            site: userSite,
            email: userEmail,
            gender: userGender,
          });
    }
    
    return(
        <div className="whole_body">
            <div className = "insta_logo">
                <Link to="/">
                    <img src = "/Navigations.png" />
                </Link>
                
                <img src = "NewPosts.png" alt ="더하기로고" className="plus_logo"/>
                <Link to="/edit-profile">
                    <img src = "miniProfile.png" alt ="작은프로필" className="mini_profile"/>
                </Link>
            </div><br></br>

            <span className="sideBar">
                <SideBar>
                    <SideEditProfile>
                        <p>프로필 편집</p>
                    </SideEditProfile>
                    <div className="sideEditPassword">
                        <p>비밀번호 변경</p>
                    </div>
                    <div className="sideMeta">
                        <img src="meta.png" alt="메타사진" className="meta"></img>

                    </div>
                </SideBar>

            </span>

            <EditForm>
                <form>
                    <div className="userName">
                        <span>사용자 이름</span>
                        <input type="text" value={userName} onChange={handleUserNameChange}></input>
                    </div>

                    <div className="userIntroduce">
                        <span>사용자 소개</span>
                        <input type="text" value={userIntroduce} onChange={handleUserIntroduceChange}></input>
                    </div>

                    <div className="userSite">
                        <span>웹사이트</span>
                        <input type="text" value={userSite} onChange={handleUserSiteChange}></input>
                    </div>

                    <div className="userEmail">
                        <span>이메일</span>
                        <input type="text" value={userEmail} onChange={handleUserEmailChange}></input>
                    </div>

                    <div className="userGender">
                        <span>성별</span>
                        <input type="text" value={userGender} onChange={handleUserGenderChange}></input>
                    </div>

                    <div className="submitButton">
                        <input type="submit" value="제출" onClick={handlerSubmitChange}></input>
                    </div>

                </form>

            </EditForm>
        </div>

    );
};

export default EditProfile;