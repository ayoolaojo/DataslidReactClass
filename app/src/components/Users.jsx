import React, { useEffect, useState } from 'react'


const url =  'https://jsonplaceholder.typicode.com/users?_limit=6'



const Users = () => {

     const [users, setUsers] = useState([])
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState('')


    useEffect(()=>{
        
      const fetchPosts = async() => {
           setError('')
           setLoading(true)
           try {
            const response =  await fetch(url);
            console.log(response)
             if(!response.ok){
                throw new Error(`Error detected: ${response.status}`)
             }
             const data = await response.json()
             setUsers(data)
           } catch (error) {
              setError(error.message)
           } finally{
            setLoading(false)
           }
      } 

      fetchPosts()
    },[])

  return (
    <div className='h-[100vh] w-full bg-green-200   justify-center' >
          <h1 className='text-center'>User GALLERY </h1>
 
          {   loading && <p>Loading.....Please wait!</p> }
          {   error && <p>{error}</p> }

          <ul  className='flex gap-2 justify-center h-[50vh] w-full pt-1.5 flex-wrap'>
            {
                users.map((user)=>(
                   <li  className=' h-40 w-100  bg-white p-1.5 flex flex-col items-center justify-center ' 
                   key={user.id}>
                      <h1>{user.id}</h1>
                      <h3>{user.name}</h3>
                       <p>{user.email}</p>
                       <p>{user.phone}</p>
                       <p>{user.website}</p>
                       <p>{user.address.city}</p>

                   </li> 
                ))
            }
          </ul>
          
    </div>
  )
}

export default Users
