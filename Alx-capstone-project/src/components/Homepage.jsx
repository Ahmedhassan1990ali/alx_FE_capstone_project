import { useState, useEffect } from 'react'

const HomePage = ({ category, setCategory, setQuestions, setPage})=>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
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


    const onChose = (index) => {
        setCategory(categories[index])
    }

    useEffect(() => {
        if (category) {
            setLoading(true)
            setError(null)
            fetch(`https://opentdb.com/api.php?amount=8&category=${category.id}&type=multiple`)
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
                console.log(reorganizedData);
                console.log(reorganizedData[0].allAns)   
                setQuestions(reorganizedData);
                setPage("Questions");
                setLoading(false);
            }).catch(error => {
                setError(error);
                setLoading(false);
            });
        }
    }, [category, setQuestions, setPage]);

    
    return (
    <>
      {error && (
        <div className='mb-4 p-3 text-3xl bg-red-100 text-red-700 rounded-lg w-64 text-center'>
          Unable to load questions. Please check your internet connection and try again.
        </div>
      )}
    
      {loading && (
        <div className='mb-4 text-3xl text-blue-600 text-center mt-4'>
          Loading questions...
        </div>
      )}


      {!loading && !error && (

      <div className='my-4  text-center m-auto'>
          
          <h2 className='text-4xl text-gray-700 my-16'>Select a category:</h2>
          <div className='flex flex-col gap-3 w-64 m-auto '>
            {categories.map((category, index) => { 
              return (
                <button 
                key={index} 
                onClick={() => onChose(index)}
                className='px-4 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors'
                >
                  {category.name}
                </button>
              )
            })}
          </div>
      </div>
      )}
    </>
    
    )}

export default HomePage;