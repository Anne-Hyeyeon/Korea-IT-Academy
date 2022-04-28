import React from "react";
const JavascriptGrammar = () => {
  // 1.Object shorthand assignment
  let name = 'hyeyeon'
  let age = '31'
  let person = {
    name,
    age
    // name = name이거나 age = age일 경우, =을 없애고 둘 중에 하나만 적으면 된다. 숏핸드 어사인먼트라고 한다.
  }
  
  console.log(person)






  // 2. Destructuring (객체, 배열)
  // 1) 객체
  let person2 = {
    name2 : 'hyeyeon',
    age2 : 31
  }
  // let name2 = person2.name2
  // let age2 = person2.age2
  let { name2, age2 } = person2
  console.log(name2, age2)
  
  // 2) 배열
  let array = ['베트남음식','한국음식','일본음식','중국음식']
  // let [ a,b,c,d ] = array
  let [ a,b, ...d ] = array
  // ...는 스프레드, 
  console.log(array[3],a)






  // 3. Spread
  let human = {
    name : 'hyeyeon_kim',
    age : 31
  }
  let human2 = { 
    hobby : 'reading', 
    ...human 
    // name : 'baby', ...human 이렇게 하면 ...스프레드로 불러온 값을 수정하는 것도 가능함. 
  }
  // human이 human2 안에 복사되어 들어감
  console.log(human2)
  
  let aa = [ 1, 2 ]
  let bb = [ ...aa, 3]
  console.log(aa)
  console.log(bb)
  let cc = [ ...aa, ...bb ]
  console.log(cc) 




  // 4. 삼항연산자
  let man = {
    name : 'superman',
    age : 100,
  }
  // if (man) {
  //   console.log(man.name)
  // } else {
  //   console.log('there is no man')
  // }

  man ? console.log(man.name) : console.log('there is no man')


  return (
    <div>
      JSG
    </div>
  )
}

export default JavascriptGrammar 