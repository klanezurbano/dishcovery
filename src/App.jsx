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
import LoginPage from "./pages/LoginPage"
import Protected from "./components/Protected"

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
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/meal-gallery" element={<MealGallery/>}/>
              <Route path="/meal/:id" element={<MealInfo/>}/>
              <Route path="/create" element={
                <Protected>
                  <CreateMeal />
                </Protected>
              }/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
