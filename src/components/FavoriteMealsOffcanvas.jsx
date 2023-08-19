import { useSelector } from "react-redux"
import FavoriteListItem from "./FavoriteListItem"

function FavoriteMealsOffcanvas() {
  const favoriteMeals = useSelector(state => state.favoriteMeals)

  return (
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Favorite Meals</h5>
          <button type="button" id="closeFavoriteOffcanvas" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group list-group-flush">
            {
              favoriteMeals.length === 0 ? 'No favorite meals yet' :
                favoriteMeals.map(
                  meal => <FavoriteListItem key={`favorite-meal-${meal.id}`} id={meal.id} title={meal.title} thumbnail={meal.thumbnail} />
                )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default FavoriteMealsOffcanvas
