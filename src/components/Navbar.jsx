import axios from "axios"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { setMeals } from "../store/mealsReducer"
import { markLoading, unmarkLoading } from "../store/isLoadingReducer"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

function Navbar() {
  const dispatch = useDispatch()
  
  const fetchMeals = async () => {
    const res = await axios('http://localhost:8000/api/v1/recipes')

    dispatch(setMeals(res.data.data.map(
      meal => {
        return {
          id: meal.id,
          title: meal.name,
          thumbnail: meal.imageUrl
        }
      }
    )))
    dispatch(unmarkLoading())
  }

  useEffect(() => {
    dispatch(markLoading())
    fetchMeals()
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DISHcovery</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/meal-gallery">Meal Gallery</NavLink>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <FontAwesomeIcon icon={faHeart}/> Favorites
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
