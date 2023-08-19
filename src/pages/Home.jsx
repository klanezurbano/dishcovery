import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {
  const [featuredMeal, setFeaturedMeal] = useState({})

  const fetchFeaturedMeal = async () => {
    const res = await axios('https://www.themealdb.com/api/json/v1/1/random.php')
    const mealResult = res.data.meals[0]

    const youtubeSrc = mealResult.strYoutube.replace('watch?v=', 'embed/')
    setFeaturedMeal({
      id: mealResult.idMeal,
      title: mealResult.strMeal,
      embedYoutube: <iframe width="560" height="315" src={youtubeSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    })
  }

  useEffect(() => {
    document.title = 'Home'
    fetchFeaturedMeal()
  }, [])

  return (
    <>
      <main className="d-flex flex-column align-items-center">
        <h2>Featured Meal</h2>
        { featuredMeal.embedYoutube }
        <Link to={`/meal/${featuredMeal.id}`}><h4>{featuredMeal.title}</h4></Link>
      </main>
    </>
  )
}

export default Home
