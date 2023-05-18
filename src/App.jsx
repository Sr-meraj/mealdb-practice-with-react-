import './App.css'
import Mealdb from './FoodContainer/Mealdb'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function App() {
  return (
    <>
      <Header />
      <section>
        <Mealdb/>
      </section>
      <Footer/>
    </>
  )
}

export default App
