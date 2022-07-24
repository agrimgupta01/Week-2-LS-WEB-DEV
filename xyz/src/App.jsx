import { useState } from 'react'
import Navbar from './components/navbar'
import Review from './components/review'
import News from './components/news'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        <Review />
        <Review />
        <Review />
        <News />
      </div>
  )
}

export default App
