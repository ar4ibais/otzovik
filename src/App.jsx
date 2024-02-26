import Footer from './components/Footer'
import Header from './components/Header'
import AddReview from './pages/AddReview'
import Home from './pages/Home'
import Review from './pages/Review'

import './scss/App.scss'
import './scss/reset.scss'

function App() {

  return (
    <>
      <Header />
      <Home />
      {/* <Review /> */}
      {/* <AddReview /> */}
      <Footer />
    </>
  )
}

export default App
