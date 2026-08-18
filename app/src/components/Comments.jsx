import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'


const Comments = () => {
     const url = 'https://jsonplaceholder.typicode.com/comments'
    const {data:comments,loading,error} = useFetch(url)

  return (
    <div>    

            <h1>Comments Gallery</h1>
         {
            loading && <p>Loading...Please wait</p>

         }

          {
            error && <p>{error}</p>
          }

          <ul>
            {
               comments.map((comment)=>(
                <li key={comment.id}>
                    <h1>{comment.name}</h1>
                    <p>{comment.email}</p>
                     <p>{comment.body}</p>
                </li>
               ))
            }
          </ul>
    </div>
  )
}

export default Comments
