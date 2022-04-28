import React from "react";

const Quiz = () => {
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

  // 1. map 문제 

  // 1) 대문자로 toUpperCase
  let list = names.map((item) => {
    return item.toUpperCase()
  })
  console.log(list)

  // 2) 성을 제외한 이름만 입력
  let list2 = names.map((item) => {
    return item.split(" ")[0]
  })
  console.log(list2)

  // 3) 이름의 이니셜만 출력
  let list3 = names.map((item) => {
    return item.split(" ")
  })
  console.log(list3)
  // 나중에하기






  // 2. filter 문제
  // 1) 이름에 a를 포함한 사람들 출력
  let list4 = list2.filter((item)=>{
    return item.includes('a')
  })
  console.log(list4)


  // 2) 이름에 같은 문자가 연습해서 들어간 사람들 출력
  let list5 = list2.filter((item)=>{
    return item.includes('a')
  })
  console.log(list5)


/*

1.map 문제

모든 이름을 대문자로 바꾸어서 출력하시오.

성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])

이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

Hint) toUpperCase(), split(' ')[0]



2.filter 문제

이름에 a를 포함한 사람들을 출력하시오.

이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)

Hint) includes()



3.some 문제

전체 이름의 길이가 20자 이상인 사람이 있는가?

성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)



4.every 문제

모두의 전체 이름의 길이가 20자 이상인가?

모두의 이름에 a 가 포함되어 있는가?



5.find 문제

전체 이름의 길이가 20자 이상인 사람을 찾으시오.

미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)



6.findIndex 문제

전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.

미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.

*/
  return(
    <div>

    </div>
  )
}



export default Quiz