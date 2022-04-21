import React,{ useState } from 'react'


export default function Say() {
  const [message, setMessage] = useState('초기값')
  const [color, setColor] = useState(
    {color:'blue'})
  const onClickEnter = () => setMessage('안녕')
  const onClickLeave = () => setMessage('잘가요~~~다신오지마 ㅋㅋㅋ')

  return (
    <div>
      <h1 style ={color}>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={()=>setColor({color:'red'})}>글자색 변경</button>
    </div>
  )
}
