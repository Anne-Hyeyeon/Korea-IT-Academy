import React from 'react'


function Box(props){
  const btn = () =>{
    alert('안녕하세요.')
  }
  
  return(
    <div className="box">
     Box {props.num}<br />
     {props.name}<br />
     <button onClick={btn}>클릭하세요</button>
    </div>
  )
}

export default Box