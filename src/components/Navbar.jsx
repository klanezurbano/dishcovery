import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { setMeals } from "../store/mealsReducer"
import { markLoading, unmarkLoading } from "../store/isLoadingReducer"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { setUser } from "../store/loggedInUserReducer"

function Navbar() {
  const dispatch = useDispatch()
  const loggedInUser = useSelector(state => state.loggedInUser);
  
  const fetchMeals = async () => {
    const res = await axios(`${import.meta.env.VITE_BASE_URL}/api/v1/recipes`)

    dispatch(setMeals(res.data.data.map(
      meal => {
        return {
          id: meal.id,
          title: meal.name,
          thumbnail: meal.imageUrl && meal.imageUrl.replace('storage/', `${import.meta.env.VITE_BASE_URL}/storage/`)
        }
      }
    )))
    dispatch(unmarkLoading())
  }

  const logout = () => {
    dispatch(setUser(null));
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
          {
            loggedInUser && <button className="btn btn-link" onClick={logout}>Logout</button>
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar
