import React ,{useState,useEffect, createContext, useContext}from 'react';
import './App.css';
import './MyPage.js';
import Home from './Home.js';
import MyPage from './MyPage.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import EditProfile from './EditProfile'; 
/*import를 하지 않고 public폴더에 사진 넣어두고 꺼내 쓰는 방식 사용. */

export const MyContext = createContext();

function App() {
  const [MyData, setUser] = useState({
    name:'이성주',
    introduce:'Pay it forward',
    site:'링크 추가하기',
    email:'...@gmail.com',
    gender:'Male',
    id:'sj_mon_'
  });


  const handleUserChange = (event) => {
    setUser(event);
  }

  return (
    <MyContext.Provider value={MyData}>
      <Router>
        <Routes>
          <Route path="/edit-profile" element={<EditProfile  onchange={handleUserChange}/>} />
          <Route path="/" element={<MyPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </MyContext.Provider>
    
  );
}

export default App;
