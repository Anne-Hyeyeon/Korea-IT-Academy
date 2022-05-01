import React from 'react'
import { useState, useEffect } from 'react'
import 'chart.js/auto'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
import axios from 'axios'


const Contents = () => {
  // const array = [3, -1, 10, 5, 0]
  // const sum = array.reduce(function(accumulator, currentValue){
  //   return accumulator + currentValue
  // })
  // console.log(sum)
  // const sum1 = array.reduce((acc,value)=>acc + value)
  const [confirmedData, setConfirmedData] = useState({
    labels:[], datasets: []
  })
  const [quarantedData, setQuarantedData] = useState({
    labels:[], datasets: []
  })
  const [comparedData, setComparedData] = useState({
    labels:[], datasets: []
  })
  useEffect(()=>{
       const fetchEvents = async() => {
        const res = await axios.get('https://api.covid19api.com/dayone/country/kr')
        // asynce await를 쓰지 않으면, data를 다 가져오기 전에 호출해서 promise  에러가 난다.
        // 이를 해결하기 위해 async(), await를 사용한다.
        makeData(res.data)
      }

    const makeData = (items) => {
      // reduce로 값을 누적. acc는 배열의 첫번째 값, cur은 두번째 값
      const arr = items.reduce((acc, cur)=>{
        const currentDate = new Date(cur.Date)
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()
        const date = currentDate.getDate()
        const confirmed = cur.Confirmed
        const active = cur.Active
        const death = cur.Deaths
        const recovered = cur.Recovered
        const findItem = acc.find(a=>a.year === year && a.month === month)

        if(!findItem){
          acc.push({ year, month, date, confirmed, active, death, recovered })
        }
        if (findItem && findItem.date < date){
          findItem.active = active
          findItem.death = death
          findItem.date = date
          findItem.year = year
          findItem.recovered = recovered
          findItem.confirmed = confirmed
        }
        return acc
      }, [])
      const labels = arr.map(a => `${a.month + 1}월`)
      setConfirmedData({
        labels,
        datasets:[
          {
            label : '국내 누적 확진자',
            backgroundColor : 'salmon',
            fontSize : 16,
            fill : true,
            data : arr.map(a=>a.confirmed)
          }
        ]
      })

      setQuarantedData({
        labels ,
        datasets:[
          {
            label : '국내 누적 확진자',
            backgroundColor : ['salmon'],
            fontSize : 16,
            fill : false,
            data : arr.map(a=>a.active)
          }
        ]
      })
      // 주석 테스트 2 

      const last = arr[arr.length -1]
      setComparedData({
        labels : ["확진자","격리 해제", "사망자"],
        datasets:[
          {
            label : '누적 확진자, 해제, 사망 비율',
            backgroundColor : ['#ff3d67','#059bff','#ffc233'],
            fontSize : 16,
            fill : false,
            data : [last.confirmed,last.recovered,last.death]
          }
        ]
      })


    }
    fetchEvents()
  },[])



  return(
    <section>
      <h2>국내 코로나 현황</h2>
      <div className='contents'>
        <div>
          <Bar data = {confirmedData} options={
            { title: { display: true, text:"누적 확진자 추이", fontSize:16 } },
            { legend: { display:true, position:'bottom' } }
          } />

        </div>
        <div>
          <Line data={quarantedData} options={
            { title : { display : true, text : "월별 격리자 현황", fontSize:16 } },
            { legend: { display:true, position:'bottom' } }
          } />
        </div>
        <div>
          <Doughnut data={comparedData} options={
              { title : { display : true, text : "누적, 확진, 해제, 사망", fontSize:16 } },
              { legend: { display:true, position:'bottom' } }
            } />
        </div>
      </div>
    </section>
  )
}
export default Contents