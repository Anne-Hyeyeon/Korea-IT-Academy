import React from "react";

const QuizAnswer = () => {
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


  // 1. map 문제 
  // 1) 모든 이름을 대문자로 바꾸어서 출력하시오.
    let list = names.map((item) => {
      return item.toUpperCase()
    })
    console.log('1-1. 모든 이름을 대문자로 바꾸어 쓰면 : ', list)


  // 2) 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
    let list2 = names.map((item) => {
      return item.split(" ")[0]
    })
    console.log('1-2. 성을제외한 이름만 출력하면 : ', list2)


  // 3) 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
    let initialOnly = names.map((item)=>{
      let splitNmae = item.split(' ')
      let initial = ''
      splitNmae.forEach((nameItem)=>(initial += nameItem[0]))
      return initial
    })

  console.log('1-3. 이름의 이니셜만 출력하면 : ', initialOnly)




  //  2. filter 문제
  //  1) 이름에 a를 포함한 사람들을 출력하시오.
    let includesA = names.filter((item) => item.includes('a'))
    console.log('2-1. 이름에 a를 포함한 사람들 : ', includesA)


  // 2) 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
    let doubleLetter = names.filter((item)=>{
      let splitName = item.split('')
      return splitName.some((letter, index) => letter == splitName[index +1])
    })

    console.log('2-2. 이름에 같은 글자가 연속해서 들어간 사람들(for문) : ', doubleLetter);



  // 3. some 문제
  // 1) 전체 이름의 길이가 20자 이상인 사람이 있는가?
    console.log('3-1. 전체 이름의 길이가 20자 이상인 사람 : ', names.some((item)=>item.length>=20))


    // 2) 성을 제외한 이름에 p를 포함한 사람이 있는가?
    console.log('3-2. 성을 제외한 이름에 p 포함한 사람이 있는가? : ', names.some((item)=>{
      let splitName = item.split(' ')
      splitName.pop()
      return splitName.some(eachName => eachName.toLocaleUpperCase.includes('p'))
    }))




  // 4. Every 문제
  // 1) 모두의 전체 이름의 길이가 20자 이상인가?
    console.log('4-1. 모두의 전체 이름의 길이가 20자 이상인가? : ', names.every(item => item.length >= 20))

  // 2) 모두의 전체 이름에 a가 포함되어 있는가?
    console.log('4-2. 모두의 전체 이름에 a가 포함되어 있는가? : ', names.every(item => item.includes('a')))




  // 5. find 문제
  // 1) 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
    console.log('5-1. 전체 이름의 길이가 20자 이상인 사람이 있는가? : ', names.find(item=>item.length >= 20))


  // 2) 미들네임이 포함되어있는 사람을 찾으시오.
    let list11 = names.find((item)=>{
      return item.split(" ").length > 2 
    })
    console.log('5-2. 미들네임이 포함되어있는 사람은 : ', list11)
    

    

  // 6.findIndex 문제
  // 1)전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
    let list12 = names.findIndex((item)=>{
      return item.length >= 20 
    })
    console.log('6-1. 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호는 : ', list12)


  // 2)미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
    let list13 = names.findIndex((item)=>{
      return item.split(" ").length > 2 
    })
    console.log('6-2. 미들네임이 포함되어있는 사람의 인덱스 번호는 : ', list13)

  return(
    <>
    </>
  )
}



export default QuizAnswer