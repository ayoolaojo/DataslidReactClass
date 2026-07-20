import React from 'react'

const Greetings = ({name = 'User',country} ) => {

//   const props = {
//     name: 'Ayoola',
//     age: 20,
//     country: 'Nigeria',
//     city: 'Lagos'
//   }
    


  return (
    <div>
         <h1>Hello {name}, I understand you're from {country}. Welcome to Dataslid</h1>
    </div>
  )
}

export default Greetings
