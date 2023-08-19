import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MealGallery from "./pages/MealGallery"
import MealInfo from "./pages/MealInfo"
import Navbar from "./components/Navbar"
import { Provider } from "react-redux"
import { persistor, store } from "./store/store"
import NotFound from "./pages/NotFound"
import FavoriteMealsOffcanvas from "./components/FavoriteMealsOffcanvas"
import { PersistGate } from "redux-persist/integration/react"
import CreateMeal from "./pages/CreateMeal"

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <FavoriteMealsOffcanvas />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/meal-gallery" element={<MealGallery/>}/>
              <Route path="/meal/:id" element={<MealInfo/>}/>
              <Route path="/create" element={<CreateMeal />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
