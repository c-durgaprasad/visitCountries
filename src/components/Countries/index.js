import {Component} from 'react'
import './index.css'

class Countries extends Component {
  render() {
    const {eachCountry} = this.props
    const {name} = eachCountry
    return (
      <li className="list-item">
        <h1 className="name">{name}</h1>
      </li>
    )
  }
}

export default Countries
