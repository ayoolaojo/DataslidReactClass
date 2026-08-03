import React, { useEffect, useState } from 'react'


//    function Greet(){
     
//    }
const Posts = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const getPosts = async()=>{
              setLoading(true);
              setError('')


        const api = 'https://jsonplaceholder.typicode.com/posts'

         try {
            const response =  await fetch(api);
            if(!response.ok) {
                throw new Error (`${response.status} Loading Posts Failed` )
            }

            const data = await response.json()
            console.log(data)
             setPosts(data)


         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }

    }


    

           useEffect(()=>{
               getPosts()    
           }, [])
      
  return (
    <div className='w-full h-[auto] bg-amber-200 flex flex-col items-center gap-5 '>            

               <h1 className='text-4xl'>Post Getter App</h1>
             {loading  &&  <p>Loading.....Please Wait!</p> }
              {error  && <p>{error}</p>   }  
            <ul>
                  {
                    posts.map((post)=>(
                        <li key={post.id}>
                            <h1>{post.id}</h1>
                            <h3>{post.title}</h3>
                             <p>{post.body}</p>
                        </li>
                    ))
                  }
            </ul>
    </div>
  )
}

export default Posts
