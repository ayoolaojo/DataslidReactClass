import React, { useEffect, useState } from 'react'

const DataSlid = () => {
  const [name,setName] = useState('Ayoola')
  const [count,setCount] = useState(5)


  

  useEffect(()=>{
       console.log('HELLO HELLO HELLO')
  }, [count])


 


  return (
    <div className='bg-green-700  text-white  text-4xl h-50 w-full'  >
          <h1>Couter App</h1>
          <p> {count}</p>
          <button onClick={()=>setCount(count + 1)}>Add</button>
          <button onClick={()=>setCount(count -1 )}>Dec</button>
          <button onClick={()=>setCount(0)}>Reset</button>

          <p className='text-[1rem]'> This app is created by  {name}</p>
    </div>
  )
}

export default DataSlid
