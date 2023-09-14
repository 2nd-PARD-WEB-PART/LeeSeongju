
import './App.css';

function Introduce(){
  return(
    <div className = "Introduce">
      <h1>💡Introduce me💡</h1>
      <p>안녕하세요 저는 20학번 이성주 입니다.</p>
      <img className = "img" src="https://user-images.githubusercontent.com/122343583/267662354-d8cec815-8e54-4cec-9c53-bf814bc8e0b2.jpeg" alt="" />
      <p>👣ISTP</p>
      <img className = "instagram" src="https://user-images.githubusercontent.com/122343583/267873209-a37a3495-f0ee-4514-97d0-553584688391.png" alt="Instagram" />
      <span className = "insta_id">sj_mon_ </span>
      <div className = "target">
        <p>이번학기 목표 : 계획형 인간으로 변하기 🏄</p>
      </div>
      <div className = "like_thing">
        <p>
          <h1>좋아하는 것</h1>
          1. 운동 💪
        </p>
        <p>2. 음악 들으면서 대중교통 타기</p>
        <p>3. 넷플릭스</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <Introduce />
    </div>
    
  );
}

export default App;
