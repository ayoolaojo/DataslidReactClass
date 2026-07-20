import React from 'react'

const Button = ({text = 'Follow Me', bgColor = 'skyblue', wt = '150px', ht = '40px', bRadius }) => {
    const isUser = true
  return (
    <button  style={{
      height: ht,
      width: wt,
      backgroundColor:bgColor,
      margin:'10px',
      borderRadius: bRadius,

    }}>
         {
         text
         }
    </button>
  )
}

export default Button

