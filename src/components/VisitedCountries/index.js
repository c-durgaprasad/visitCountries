import './index.css'

const VisitedCountries = props => {
  const {item, deleteCountry} = props
  const {imageUrl, name, id} = item
  const removeCountry = () => {
    deleteCountry(id)
  }
  return (
    <li className="card-container">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="name-btn-con">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
