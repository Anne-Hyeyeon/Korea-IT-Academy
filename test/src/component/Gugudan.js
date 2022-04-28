import React, { Component } from 'react'

export default class Gugudan extends Component {
  state = {
    value : '',
    result : '',
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    answer : ''
  }

  onChange = (e) => {
    this.setState({
      value : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.value == this.state.first * this.state.second){
      this.setState({
        result: '맞았습니다!',
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value:'',
        answer: '정답은 ' + this.state.first * this.state.second
      })
    } else {
      this.setState({
        result: '틀렸습니다ㅠㅠ ',
        value:'',
        answer: '정답은 ' + this.state.first * this.state.second

    })
  }
}

  render() {
    return (
      <>
        <div>{this.state.first} 곱하기 {this.state.second}은(는) ?</div>
        <form onSubmit={this.onSubmit}>
          <input type="" value={this.state.value} onChange={this.onChange} />
          <button>입력</button>
        </form>
        <div>{this.state.result} {this.state.answer}</div>
     </>
    )
  }
}
