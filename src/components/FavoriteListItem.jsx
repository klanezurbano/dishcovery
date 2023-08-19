import { useDispatch } from "react-redux"
import { removeToFavoriteMeals } from "../store/favoriteMealsReducer"
import { Link } from "react-router-dom"

function FavoriteListItem(props) {
  const dispatch = useDispatch()
  const { id, title, thumbnail } = props

  const handleRemove = () => {
    dispatch(removeToFavoriteMeals(id))
  }

  const handleClose = () => {
    document.getElementById('closeFavoriteOffcanvas').click()
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <Link to={`/meal/${id}`} onClick={handleClose}>
          <img src={thumbnail} alt="" width="50" className="me-2" />
          <span>{title}</span>
        </Link>
        <button className="btn btn-sm btn-link" onClick={handleRemove}>Remove</button>
      </li>
    </>
  )
}

export default FavoriteListItem
