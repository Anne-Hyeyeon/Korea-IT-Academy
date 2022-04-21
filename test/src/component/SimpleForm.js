import React, { Component } from 'react'

export default class SimpleForm extends Component {
  state = {
    value:''
  }
  render() {
    return (
      <form onSubmit={(e)=>{
        e.preventDefault()
        alert('전송' + this.state.value)
      }}>
        <input type='text' value={this.state.value} onChange={(e) => {
          const curValue = e.target.value
          const newValue = curValue.replace(/[^0-9]/g, '') //정규식 (공부해볼것)
          this.setState({ value: newValue })
        }} />
        <input type='submit' />
      </form>
    )
  }
}
