import React, {useState,useContext} from "react";
import {MyContext} from './App';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import './App.css';

const InstaLogo = styled.div`
    width:935;
    height:53px;
    margin-top:2%;
`;

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
const ChangeProfileButton = styled.button`
    background-color: white;
    border:none;
    cursor:pointer;
`;

function EditProfile(){
    const {MyData, setUser} = useContext(MyContext);
    /*여기서 값을 수정할 수 있는 변수 선언 위해 useState사용 
    값 변경 유지를 위해서 Conext로 받아옴!!! 전체에 적용되는 값이라 사용*/
    const [userName, setUserName] = useState(MyData.name) /*props로 초기이름 설정 */
    const [userIntroduce, setUserIntroduce] = useState(MyData.introduce)/*props로 초기소개 설정 */
    const [userSite, setUserSite] = useState(MyData.site)/*props로 초기사이트 설정 */
    const [userEmail, setUserEmail] = useState(MyData.email)/*props로 초기이메일 설정 */
    const [userGender, setUserGender] = useState(MyData.gender)/*props로 초기성별 설정 */
    const [isFormDirty, setIsFormDirty] = useState(false);/*폼에 변경사항 있는지 확인 */
    const [isClicked, setIsClicked] = useState(false); /*사진바꾸기 */

    const handleClick = () => {
        
        setIsClicked(!isClicked);
    } /*클릭 되었는지 안되었는지 상태. 초기 상태를 클릭 안되었는지로 봄*/

    const handleFieldChange = () => {
        setIsFormDirty(true);
      }; /*폼 변경사항 있는지 확인. 변경사항 있으면 폼변경사항 useState를 true상태로 만듬 */

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    } /*사용자가 입력한 이름 가져와서 useName변수에 저장 */
    const handleUserIntroduceChange = (event) => {
        setUserIntroduce(event.target.value);
    } /*사용자가 입력한 소개글 가져와서 useName변수에 저장 */
    const handleUserSiteChange = (event) => {
        setUserSite(event.target.value);
    } /*사용자가 입력한 사이트 가져와서 useName변수에 저장 */
    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    } /*사용자가 입력한 이메일 가져와서 useName변수에 저장 */
    const handleUserGenderChange = (event) => {
        setUserGender(event.target.value);
    } /*사용자가 입력한 성별 가져와서 useName변수에 저장 */
    const handlerSubmitChange = (event) => {
        event.preventDefault();/*제출할 때 새로고침 안되게 하는 역할 */
        setUser({
            name: userName,
            introduce: userIntroduce,
            site: userSite,
            email: userEmail,
            gender: userGender,
            like:MyData.like
        });
        
    } /*submit버튼 누르면 context를 이용해서 현재 usestate에 있는 정보들 넘겨줌.*/

    const isSubmitDisabled = !isFormDirty || (
        userName === MyData.name &&
        userIntroduce === MyData.introduce &&
        userSite === MyData.site &&
        userEmail === MyData.email &&
        userGender === MyData.gender
      ); /*폼 변경사항이 없거나(isFormDity가 부정인 상황)
      또는 userState정보들이 초기 context의 값과 똑같은 상황에서
      폼 버튼 비활성화 */
    
    return(
        <div className="whole_body">
            <div className="body">
                <InstaLogo>
                    <Link to="/">
                        <button style={{backgroundColor:'white', border:'none',cursor:'pointer'}}><img src = "Logo.png" /></button>
                        <button className='home_button'><img src = "Menu-Button-Item.png" alt ="홈로고"/></button>
                    </Link>
                    <button className='header_heart'><img src='heart_icon.png' alt="헤더하트"></img></button>
                    <img src = "NewPosts.png" alt ="더하기로고" className="plus_logo"/>
                    <Link to="/edit-profile">
                        <img src = "miniProfile.png" alt ="작은프로필" className="mini_profile"/>
                    </Link>
                </InstaLogo>

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
                            <span>
                            <img
                            src={isClicked ? "miniProfile2.png" : "miniProfile.png"}
                            alt="중간프로필"
                            className="middle_profile"
                            onClick={handleClick}
                            />
                            </span>
                            <div className="top_from">
                                <p>{userName}</p>
                                <ChangeProfileButton><p id="atag_change_profile">프로필 사진 바꾸기</p></ChangeProfileButton>
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