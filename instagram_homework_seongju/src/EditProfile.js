import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import './App.css';

const SideBar = styled.span`
    width: 220px;
    height:647px;
    top:10%;

`;
const Button = styled.button`
    width: 220px;
    height: 50px;
    border:none;
    background-color: white;
    font-weight: 600;
`;
const SideEditProfile = styled.div`
  width: 220px;
  margin-top: 10%;
`;

const EditForm = styled.form`
    display: flex;
    justify-content: center;
    margin-left: 10%;
    text-align: right;
    margin-top: -65vh;
`;

function EditProfile(props){
    /*여기서 값을 수정할 수 있는 변수 선언 위해 useState사용 */
    const [userName, setUserName] = useState(props.user.name)
    const [userIntroduce, setUserIntroduce] = useState(props.user.introduce)
    const [userSite, setUserSite] = useState(props.user.site)
    const [userEmail, setUserEmail] = useState(props.user.email)
    const [userGender, setUserGender] = useState(props.user.gender)
    const [isFormDirty, setIsFormDirty] = useState(false);

    const handleFieldChange = () => {
        setIsFormDirty(true);
      };

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

    const isSubmitDisabled = !isFormDirty || (
        userName === props.user.name &&
        userIntroduce === props.user.introduce &&
        userSite === props.user.site &&
        userEmail === props.user.email &&
        userGender === props.user.gender
      );
    
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

            <span className="sideBar">
                <SideBar>
                    <SideEditProfile>
                        <Button>프로필 편집</Button>
                    </SideEditProfile>
                    <div className="sideEditPassword">
                        <Button>비밀번호 변경</Button>
                    </div>
                    <div className="sideMeta">
                        <img src="meta.png" alt="메타사진" className="meta"></img>

                    </div>
                </SideBar>

            </span>

            <EditForm>
                <form>
                    <div className="currentProfile">
                        <span className="from_label">
                            <span><img src = "miniProfile.png" alt ="중간프로필" className="middle_profile"/></span>
                            <div className="top_from">
                                <p>{userName}</p>
                                <a id="atag_change_profile" href="/edit-profile">프로필 사진 바꾸기</a>
                            </div>
                        </span>
                    </div><br></br>
                    <div className="userName">
                        <span className="form_label">사용자 이름</span>
                        <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value);handleUserNameChange(e); handleFieldChange();}} className="form_size1"></input>
                    </div>

                    <div className="userIntroduce">
                        <span className="form_label">사용자 소개</span>
                        <input type="text" value={userIntroduce} onChange={(e) => {setUserIntroduce(e.target.value);handleUserIntroduceChange(e); handleFieldChange();}} className="form_size2"></input>
                    </div>

                    <div className="userSite">
                        <span className="form_label">웹사이트</span>
                        <input type="text" value={userSite} onChange={(e) => {setUserSite(e.target.value);handleUserSiteChange(e); handleFieldChange();}} className="form_size1"></input>
                    </div>

                    <div className="userEmail">
                        <span className="form_label">이메일</span>
                        <input type="text" value={userEmail} onChange={(e) => {setUserEmail(e.target.value);handleUserEmailChange(e); handleFieldChange();}} className="form_size1"></input>
                    </div>

                    <div className="userGender">
                        <span className="form_label">성별</span>
                        <input type="text" value={userGender} onChange={(e) => {setUserGender(e.target.value);handleUserGenderChange(e); handleFieldChange();}} className="form_size1"></input>
                    </div>

                    <div className="submitButton">
                        <input type="submit" value="제출" onClick={handlerSubmitChange} className="submit_button" disabled={isSubmitDisabled}></input>
                    </div>

                </form>

            </EditForm>
        </div>
                
    </div>
            

    );
};

export default EditProfile;