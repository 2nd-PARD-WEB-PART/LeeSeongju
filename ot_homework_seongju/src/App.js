
import './App.css';

function Introduce(){
  return(
    <div>
      <h1>💡Introduce me💡</h1>
      <p>안녕하세요 저는 20학번 이성주 입니다.</p>
      <img style = {{display: "block"}} src="https://user-images.githubusercontent.com/122343583/267662354-d8cec815-8e54-4cec-9c53-bf814bc8e0b2.jpeg" alt="" />
      <p>👣ISTP</p>
      <p></p>
      <p>이번학기 목표 : 계획형 인간으로 변하기 </p>
      

    </div>
  );
}

function App() {
  return (
    <div className="App">

      🏄<Introduce />🏄
    </div>
    
  );
}

export default App;
