import React, { useState } from 'react'

// function increaseCount(){
//     setCount(count + 1)
// }

// function decreaseCount(){
//     setCount(count - 1)
// }

 
const NewCounter = () => {

    const [count, setCount] = useState(1)
    const [name, setName] = useState('')
    const [loading,setLoading] = useState(true)

  return (
    <div className='bg-blue-300'>
        <h1>Counter App</h1>
         <p> Count :  {count}</p>
         <button onClick={()=>setCount(count + 1)}>Add</button>
         <button onClick={()=>setCount(count-1)} >Decrease</button>
         
    </div>
  )
}

export default NewCounter
