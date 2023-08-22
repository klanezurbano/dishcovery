import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function MealInfo() {
  const { id } = useParams()
  const [meal, setMeal] = useState({
    title: '',
    thumbnail: '',
    instructions: '',
    ingredients: []
  })

  const fetchMeal = async () => {
    const res = await axios(`${import.meta.env.VITE_BASE_URL}/api/v1/recipes/${id}`)
    const mealResult = res.data.data
    const mealObj = {
      title: mealResult.name,
      thumbnail: mealResult.imageUrl,
      instructions: mealResult.instructions
    }
    
    const ingredients = mealResult.recipeIngredients.map((recipeIngredient) => {
      return `${recipeIngredient.measurement} of ${recipeIngredient.ingredient}`;
    })
    mealObj.ingredients = ingredients
    
    setMeal(mealObj)
  }

  useEffect(() => {
    fetchMeal()
  }, [])

  useEffect(() => {
    document.title = `Meal - ${meal.title}`
  }, [meal])

  return (
    <>
      <main className="w-100 d-flex flex-column align-items-center">
        <h4>{meal.title}</h4>
        <div className="d-flex">
          <img src={meal.thumbnail} alt="meal-photo" width="300" />
          <ul>
            {
              meal.ingredients.map(
                (ingredient, index) => <li key={`ingredient-${index}`}>{ingredient}</li>
              )
            }
          </ul>
        </div>
        <pre className="w-50 mt-4" style={{whiteSpace: "pre-wrap"}}>{meal.instructions}</pre>
      </main>
    </>
  )
}

export default MealInfo
