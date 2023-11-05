import axios from 'axios';
import './App.css';

const someData = {
  name:'이성주',
  age: 23,
  part:'WEB',
  imgURL:'https://user-images.githubusercontent.com/122343583/267662354-d8cec815-8e54-4cec-9c53-bf814bc8e0b2.jpeg'
};

function App() {
  axios.post('http://3.35.236.83/pard/join', someData)
    .then(response => {
      console.log('Data sent successfully:', response.data);
    })
    .catch(error => {
      console.error('Error sending data:',error);
    });
  return (
    <div>
      {someData}
    </div>
  );
}

export default App;
