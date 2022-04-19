import React, { Component } from 'react'
import {Button, List, ListItemText} from '@material-ui/core'
import axios from 'axios'

export default class Userlist extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : [{
        id:'',
        name: ''
      }]
    }
  }
  loadUser(){
    axios.get('https://jsonplaceholder.typicode.com/users').then( response => {
      this.setState({
        users : response.data
      })
    })
  }
  render() {
    const userList = this.state.users.map(user=>{
      return <ListItemText primary={user.email} key={user.id} />
    })
    return (
      <div>
      <Button onClick={this.loadUser.bind(this)} variant='contained' color='primary'>Load</Button>
      <div>{userList}</div>
      </div>
    )
  }
}
