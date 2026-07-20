import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {

     const [count,setCount]  = useState(50)

  return (

    <div>   
           <h1>Counter App</h1>
            <p className='text-purple-700  text-5xl'>{count}</p>
            <button onClick={()=>setCount(count + 1)}>
                <Button  text='➕' bgColor='green' />
            </button>

            <button onClick={()=>setCount(count -1)}>
                <Button text='➖' bgColor='red'/>
            </button>
             


              

             

            

    </div>
  )
}

export default Counter
