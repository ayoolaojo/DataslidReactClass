import React, { useEffect, useState } from 'react'


const api_url =  'https://jsonplaceholder.typicode.com/todos'
const Todos = () => {

    const [data,setData] = useState([])
    const [loading, setLoading]  =  useState(false)
    const [error, setError] = useState('')

      useEffect(()=>{
        const getTodos = async()=>{
            setLoading(true)
            setError('')
              try {
                const response =  await fetch(api_url)
                if(!response.ok) {
                    throw new Error(`Error Detected ${response.status}`)
                }
                const data =  await response.json()
                console.log(data)
                setData(data)
              } catch (error) {
                setError(error.message)
              } finally{
                setLoading(false)
              }
        }

        getTodos()
      }, [])
    
  return (
    <div>
             <h1>TODOS</h1>
             

            { loading && <p>Loading.....Pleas$e wait!</p>}
            { error && <p> Error:${error} </p>}

            <ul>
                  {
                    data.map((todo)=>(
                        <li key={todo.id}>
                            <h1>{todo.id}</h1>
                            <p>{todo.title}</p>

                        </li>
                    ))
                  } 
            </ul>

             

            
      
    </div>
  )
}

export default Todos
