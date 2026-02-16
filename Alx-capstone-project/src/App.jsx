import { useState } from 'react'
import HomePage from './components/Homepage'
import Questionspage from './components/Questionspage'

function App() {
  
  const [page, setPage] = useState("Home")
  const [category, setCategory] = useState(null)
  const [questions, setQuestions] = useState()

  return (
    <div className='min-h-screen w-10/12 md:w-8/12 mx-auto bg-gray-100 flex flex-col items-center p-8'>

      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Alx Capstone Project</h1>
      <h2 className='text-xl text-gray-600 mb-4'>By Ahmed Hassan</h2>
      <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Quiz App</h2>
      <hr className='w-48 border-t-2 border-gray-300 mb-6' />
      

      {page ==="Home" && <HomePage category={category} setCategory={setCategory} 
                                  setQuestions={setQuestions} setPage={setPage}/>}
      {page ==="Questions" && <Questionspage category={category} questions={questions}
                                  setPage={setPage} />}
    
    </div>
    
  )
}

export default App
