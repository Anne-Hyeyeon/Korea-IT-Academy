import React, { Component } from 'react'

export default class Say2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: {color:'blue'},
      text : '초기값'
      }
    }

  render() {
    const onClickEnter = () => this.setState({text:'안녕하세요.'})
    const onClickLeave = () => this.setState({text:'잘가요.'})
    const onClickColor = () => this.setState({color:{color:'red'}})

    return (
      <div>
        <h1 style ={this.state.color}>{this.state.text}</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={onClickColor}>글자색 변경</button>
      </div>
    )
  }
}
