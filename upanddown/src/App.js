import './App.css';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState('1~30 사이의 숫자를 맞춰보세요')
  const [answer, setAnswer] = useState(0)
  const [rightAnswer, setRightAnswer] = useState(Math.ceil(Math.random()*30))
  function returnFunc(e) {
    e.preventDefault()
    if (+answer === rightAnswer) {
      console.log(answer)
      setStatus('정답입니다.')
      setTimeout(function(){
        resetFunc()
      },2000)
    } else if (answer < rightAnswer) {
      setStatus('업')
    } else {
      setStatus('다운')
    }
  }

  function resetFunc(){
      setStatus('다시 풀어보세요')
      setAnswer(0)
      setRightAnswer(Math.ceil(Math.random()*30))
  }

  function changeAnswer(e){
    setAnswer(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={returnFunc}>
        <h1>Up and Down</h1>
        <p>{status}</p>
        <input type="number" max="30" min="1" value={answer} onChange={changeAnswer} />
        <button>확인</button>
      </form>
    </div>
  );
}

export default App;
