import React, { Component } from 'react'

class Stopwatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLive : false,
      curTime: 0,
      startTime : 0
    }
    this.timerID = 0
  }
  componentWillMount(){
    this.timerId = setInterval(e=>{this.tick()},100)
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){
    if(this.state.isLive){
      this.setState({
        curTime: new Date().getTime()
      })
    }
  }



  getDisp(){
    const z2 = (v)=>{
      const l = '00' + v
      return l.substr(l.length - 2,2)
    }

    const z3 = (v)=>{
      const l = '0' + v
      return l.substr(l.length - 4,2)
    }

    const s = this.state
    const delta = s.curTime - s.startTime
    const t = Math.floor(delta/1000)
    const ss = t % 60
    const m = Math.floor(t / 60)
    const mm = m % 60
    const hh = Math.floor(mm/60)
    
    // const z3 = delta.substr(delta.length - 2,2)


    return <span className='disp'>{z2(hh)}:{z2(mm)}:{z2(ss)}:{z3(delta)}</span>
  }
  render() {
    let label = 'START'
    if (this.state.isLive){
      label = 'STOP'
    }

    return(
    <div className='disp'>
       <div>{this.getDisp()}</div>
       <button onClick={(e)=>{
        if (this.state.isLive){
        // Stop 클릭
        this.setState({
          isLive:false})
        }else{
          // start 클릭
          const v = new Date().getTime()
          this.setState({
            curTime:v,
            startTime:v,
            isLive:true
          })
      }
      }}>{label}</button>
    </div>
    )
  }
}

export default Stopwatch;