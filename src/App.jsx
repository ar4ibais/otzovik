import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews/:id' element={<Review />} />
          <Route path='/reviews/add' element={<AddReview />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
