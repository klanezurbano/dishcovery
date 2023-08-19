import { useEffect } from "react"
import MealCard from "../components/MealCard"
import { useSelector } from "react-redux"
import FilterPanel from "../components/FilterPanel"
import LoadingSpinner from "../components/LoadingSpinner"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

function MealGallery() {
  const meals = useSelector(state => state.meals)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    document.title = 'Meal Gallery'
  }, [])

  return (
    <>
      <main className="d-flex align-items-start">
        <FilterPanel />
        <div className="d-flex flex-column w-75 m-3">
          <Link to="/create" className="btn btn-primary align-self-end">
            <FontAwesomeIcon icon={faPlus} /> Create Meal
          </Link>
          <div className="d-flex flex-wrap">
            {
              isLoading ? <LoadingSpinner /> : meals.map(
                meal => <MealCard key={meal.id} id={meal.id} title={meal.title} thumbnail={meal.thumbnail} />
              )
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default MealGallery
