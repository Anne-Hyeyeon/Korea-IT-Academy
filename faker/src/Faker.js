import React, { Component } from 'react'
import faker from 'faker'

class Data{
  image = faker.image.image()
  email = faker.internet.email()
  name = faker.name.findName()
}

export default class Faker extends Component {
  data = new Data()
  state ={
    name: faker.name.findName(),
    image: faker.image.image(),
    email: faker.internet.email()
  }
  generate = () => {
    this.setState = ({
      email : faker.internet.email(),
      image : faker.image.image(),
      name : faker.name.findName()
    })
  }
  render() {
    return (
      <>
      <h1>Faker Demo</h1>
      <p><img src ={this.data.image} style={{width:'100px'}} alt="faker" /></p>
      <p>{this.data.name}</p>
      <p>{this.state.email}</p>
      <button onClick={this.generate}>Generate</button>
      </>
    )
  }
}
