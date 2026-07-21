import React, { useState } from 'react'



const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    const [userInput, setUserInput] =  useState('')
      

    function handleLikes() {
        setLikes(likes + 1)
    }


  return (
    <div>  
             
           { likes === 0  &&  <p>Be the first one to like this posts</p>}
           {likes > 0  &&  <p> This post has {likes}  likes</p> }
         
         <button className='h-10 w-50 bg-red-400 text-white' onClick={handleLikes}>{likes}Likes❤️   </button>
         <input type="text" />


         


    </div>
  )
}

export default LikeButton
