import React ,{useState, createContext}from 'react';
import './App.css';
import './MyPage.js';
import Home from './Home.js';
import MyPage from './MyPage.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import EditProfile from './EditProfile'; 
/*import를 하지 않고 public폴더에 사진 넣어두고 꺼내 쓰는 방식 사용. */

export const MyContext = createContext();/** Context이용 위해서 선언 */

function App() {
  const [MyData, setUser] = useState({
    name:'이성주',
    introduce:'Pay it forward',
    site:'링크 추가하기',
    email:'...@gmail.com',
    gender:'Male',
    id:'sj_mon_',
  });
  /** 저장할 기본적인 data값들. Context를 이용해서 바꿔줌 값들임. */

  const [likeCount, setLikeCount] = useState(77);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]); /**댓글 목록 상태 */
  /** useState값을 Context사용해서 변경하기 위해서 App.js에 선언해놓음. */

  return (
    <MyContext.Provider value={{MyData, setUser,
    likeCount,setLikeCount,
    isLiked, setIsLiked,
    comments, setComments}}>
      {/** Context사용 위해서 Provider 사용 후 value값으로 변경 되어야하는 값들 넣어줌. */}
      <Router>
        <Routes>
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/" element={<MyPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </MyContext.Provider>
    
  );
}

export default App;
