import { useState } from 'react'
import Homepage from './components/Homepage'

function App() {
  
  const [page, setPage] = useState("Home")
  const [category, setCategory] = useState(null)

  return (
    <>
    {page && <Homepage page={page} setPage={setPage}  
              category={category}  setCategory={setCategory}/>}
    </>
  )
}

export default App
