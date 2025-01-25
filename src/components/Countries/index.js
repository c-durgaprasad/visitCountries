import {Component} from 'react'
import './index.css'

class Countries extends Component {
  render() {
    const {eachCountry, visited} = this.props
    const {name, isVisited, id} = eachCountry
    const visitedCountry = () => {
      visited(id)
    }
    return (
      <li className="list-item">
        <div className="details">
          <p className="name">{name}</p>
          {isVisited ? (
            <p className="visited">Visited</p>
          ) : (
            <button
              type="button"
              className="visit-btn"
              onClick={visitedCountry}
            >
              Visit
            </button>
          )}
        </div>

        <hr className="hr" />
      </li>
    )
  }
}

export default Countries
