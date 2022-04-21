import React, { Component, useState } from 'react'

function Blog() {
    const [title, setTitle] = useState(['학원 오시는 길','버스 타고 오는 법','지하철 타고 오는 법']) 
    const [title1, setTitle1] = useState('학원 위치 보기') 

    
    // [a,b] 배열이 생김. a는 학원오시는 길 값(실제 state 데이터), b는 스테이트를 바꿀 수 있는 함수 
    // var [a,b] = [10,100];
    // 이렇게하면 a에 10이 들어가고, b에 100이 들어가게 된다.
    // var a = 10, var b = 100
    // ES6의 Destructuring 문법
    // state는 1. 변수 대신 쓰이는 데이터 저장공간, useState()를 이용해 만든다. 만드는 방법은 두 가지이다.  1) 생성자 통해 만들기 2) useState를 통해 만들기. 성능상의 이슈는 없지만, 두 번째 방법이 더 깔끔하다.

    let posts = "신촌 고기 맛집"
    return (
      <>
      <div className='app-title'>개발 Blog</div>
      <div className='list'>
        <h3>{title[0]}</h3>
        <p>4월 21일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title1}</h3>
        <p>4월 21일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[1]}</h3>
        <p>4월 21일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[2]}</h3>
        <p>4월 21일 발행</p>
        <hr />
      </div>
      </>
    )
}
export default Blog
