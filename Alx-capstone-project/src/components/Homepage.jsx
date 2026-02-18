import { useState, useEffect } from 'react'

const HomePage = ({ category, setCategory, setQuestions, difficulty, setDifficulty, setPage})=>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [qNumber, setQNumber] = useState(8)
    

    const difficulties = ["easy", "medium", "hard"];

    const categories = [
        { id: 9, name: "General Knowledge" },
        { id: 18, name: "Computers" },
        { id: 19, name: "Mathematics" },
        { id: 22, name: "Geography" },
    ];

    const decodeHtml = (html) => {
      const txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }

    const mixAndShuffle = (arr,element) => {
      const mixed = [...arr, element]
      const shuffled = [...mixed];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }


    const onChoseCat = (index) => {
        setCategory(categories[index])
    }
    const onChangeQNumber = (e)=>{
      setQNumber(e.target.value)
    }

    const onChoseDiff = (index)=>{
      setDifficulty(difficulties[index])
    }

    const onStart = () => {
          setLoading(true)
          setError(null)
          console.log(`https://opentdb.com/api.php?amount=${qNumber}&category=${category.id}&difficulty=${difficulty}&type=multiple`)
          fetch(`https://opentdb.com/api.php?amount=${qNumber}&category=${category.id}&difficulty=${difficulty.toLowerCase()}&type=multiple`)
          .then(response => response.json())
          .then(data => {
              const reorganizedData = data.results.map((result)=>{
                return {
                  question : decodeHtml(result.question),
                  correctAns : decodeHtml(result.correct_answer),
                  allAns : mixAndShuffle(result.incorrect_answers,
                        result.correct_answer).map((ans)=> decodeHtml(ans))
                }
              })
              setQuestions(reorganizedData);
              setPage("Questions");
              setLoading(false);
          }).catch(error => {
              setError(error);
              setLoading(false);
          });
        
    };

    const diffBgColor = (index) => {
        if (difficulties[index] === difficulty.toLowerCase()){  
            return "bg-blue-800"
        }
        else {
            return "bg-blue-500   hover:bg-blue-600 active:bg-blue-700"
        }
    }

    const catBgColor = (index) => {
        if (categories[index].id === category.id){  
            return "bg-blue-800"
        }
        else {
            return "bg-blue-500   hover:bg-blue-600 active:bg-blue-700"
        }
    }

    
    return (
    <div className='border'>
      {/* Error Handling */}
      {error && (
        <div className='mb-4 p-3 text-3xl bg-red-100 text-red-700 rounded-lg w-64 text-center'>
          Unable to load questions. Please check your internet connection and try again.
        </div>
      )}


      {/* Loading */}
      {loading && (
        <div className='mb-4 text-3xl text-blue-600 text-center mt-4'>
          Loading questions...
        </div>
      )}


      {!loading && !error && (

      
      <div className='my-1  text-center m-auto'>
          {/* Difficulty and Number selection */}
          <div className='flex flex-row  items-stretch justify-around '>
            <div className='flex flex-col  gap-1'>
              <h2 className='text-2xl text-gray-700 mt-2 mb-2'>Difficulty</h2>
              {difficulties.map((difficulty,index)=>(
                <button 
                key={index} 
                onClick={() => onChoseDiff(index)}
                className={`px-2 py-1 text-xl text-white rounded-lg ${diffBgColor(index)} transition-colors`}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase()}
                </button>
              ))}

            </div>
            <div className='flex flex-col items-center pb-4 gap-1  '>
              <h2 className='text-2xl text-gray-700 mt-2 mb-2'>Questions <br /> Number</h2>
              <input 
                  className='flex-1 w-20 border-2 pl-3 bg-yellow-500 text-4xl text-center'
                  type="number"
                  max="10"
                  min="3"
                  value={qNumber}
                  onChange={onChangeQNumber}             
              />


            </div>

          </div>



          {/* Category selection */}
          <h2 className='text-2xl text-gray-700 mt-3 mb-2'>Category</h2>
          <div className='flex flex-col gap-1 w-64 m-auto '>
            {categories.map((category, index) => (
                <button 
                key={index} 
                onClick={() => onChoseCat(index)}
                className={`px-2 py-1 text-xl text-white rounded-lg ${catBgColor(index)} transition-colors`}>
                  {category.name}
                </button>
            ))}
          </div>
          <button className="block px-4 py-3 mt-2 mx-auto text-white rounded-lg  bg-green-700
                     transition-colors text-center text-xl "
                onClick = {onStart}>
            Start
          </button>
      </div>
      )}
    </div>
    
    )}

export default HomePage;