import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setMeals } from "../store/mealsReducer"
import { markLoading, unmarkLoading } from "../store/isLoadingReducer"

function FilterPanel() {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  
  const fetchCategories = async () => {
    const res = await axios('https://www.themealdb.com/api/json/v1/1/categories.php')
    const categoriesResult = res.data.categories.map(category => category.strCategory)
    setCategories(categoriesResult)
  }
  
  const handleRadioChange = async (e) => {
    dispatch(markLoading())
    const res = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.id}`)
    dispatch(setMeals(res.data.meals.map(
      meal => {
        return {
          id: meal.idMeal,
          title: meal.strMeal,
          thumbnail: meal.strMealThumb
        }
      }
    )))
    dispatch(unmarkLoading())
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <>
      <div className="border d-flex flex-column w-25 p-3 m-3">
        <h4>Categories</h4>
        <ul className="list-group list-group-flush">
          {
            categories.map(
              (category, index) => {
                return <li key={`category-${index}`} className="list-group-item">
                  <input className="me-3" type="radio" name="categories" id={category} onChange={handleRadioChange} />
                  <label htmlFor={category}>{category}</label>
                </li>
              }
            )
          }
        </ul>
      </div>
    </>
  )
}

export default FilterPanel
