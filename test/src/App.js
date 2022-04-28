import './App.css';
import Quiz from './component/Quiz';
// import Box from './component/Box';
// import Mount from './component/Mount'
// import Userlist from './component/Userlist';
// import Blog from './component/Blog.js';
// import Say from './component/Say.js';
// import Say2 from './component/Say2.js';
// import SimpleForm from './component/SimpleForm';
// import Gugudan from './component/Gugudan';
// import JavascriptGrammar from './component/JavascriptGrammar';

function App() {
  let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Deward Buffett",
    "Larry Page",
    "Tim Cook",
    "Lloyd Blankfein"
  ]

  let ceoList = [
    { name : "Larry Page",
      age : 23,
      ceo : true
    },
    { name : "Tim Cook",
      age : 40,
      ceo : true
    },
    { name : "Elon Musk",
      age : 55,
      ceo : false
    }
  ]

  // 1. forEach, map 함수
  //  for (let i = 0; i < names.length; i++){
  //    console.log(names[i])
  //  }
  
  // function printName(item) {
  //   console.log(item)
  // }
  // names.forEach((item, index) => {
  //   console.log(item, index)
  // })
  // // forEach는 반환값이 없다. 단순 for문과 같이 작동한다.


  // map을 쓰기 위해서는 변수를 지정해야 한다.
  // let data = names.map((item) => {
  //   return item
  // })
  // console.log(data)

  // forEach와 map의 차이점 : map은 반드시 배열을 반환한다.

  let data = ceoList.map((item)=>{
    return item.name
    // API와 같은 자료의 값은 대부분 object로 되어 있는데, 원하는 값만 추출하고 싶을 때 map함수를 쓴다.
  })
  console.log('map',data)

  





  // 2. filter함수
  let data2 = ceoList.filter((item)=>{
    // return item.age == 23
    return item.name.startsWith('L')
  })
  console.log('filter', data2)







  // 3. some 함수
  let data3 = names.some((item)=>{
    // return item.age == 23
    return item.startsWith('L')
    // 요소들이 해당 조건을 모두 만족하면 true, 아니면 false
  })
  console.log('some', data3)






  // 4. every 함수
  let data4 = names.every((item)=>{
    // return item.age == 23
    // return item.name.startsWith('L')
    return item.length > 0 
    // 조건이 맞으면 true, 틀리면 false
  })
  console.log('every', data4)



  
  // 5. find 함수
  let data5 = ceoList.find((item)=>{
    return item.name.startsWith('E')
    // 조건이 맞는 것을 하나만 찾아줌. filter는 배열 전체가 나오고, find는 값 하나만 나온다.
  })
  console.log('find', data5)


    
  // 6. findIndex 함수
  let data6 = names.findIndex((item)=>{
    return item.startsWith('E')
  })
  console.log('findIndex', data6)



  /* 
  배열함수 정리
  - forEach : 반환값이 없다. 단순 for문과 같이 작동.
  - map : 반환값을 배열에 담아 반환.
  - filter : 조건에 충족한(true) 아이템만 배열에 담아 반환한다.
  - some : 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 false
  - every : 모든 배열의 아이템이 조건이 충족했을 때 ture, 아니면 false.
  - find : 조건에 충족하는 아이템 하나만 반환 (여러 개면 첫 번째만 반환한다.)
  - findIndex : 조건에 충족하는 아이템의 인덱스값을 반환한다. (여러 개면 첫 번째 아이템의 인덱스 번호만 반환.)
  */ 


  return (
    <div className="App">
      {/* <JavascriptGrammar /> */}
      <Quiz />
    </div>
  );
}

export default App;
