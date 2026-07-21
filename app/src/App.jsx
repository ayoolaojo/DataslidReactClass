import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Greetings from './components/Greetings'


// Create a ProfileCard component that accepts name, role, and skills as props
// Display the name and role on the card
// Map over the skills array inside the component and render each skill as a <span>
// Map over teamMembers in App and render a ProfileCard for each one with correct key props
    const teamMembers = [
  { id: 1, name: "Tunde", role: "Frontend Dev", skills: ["React", "JavaScript", "CSS"] },
  { id: 2, name: "Amina", role: "Backend Dev", skills: ["Node.js", "Python", "SQL"] },
  { id: 3, name: "Chidi", role: "UI Designer", skills: ["Figma", "CSS", "Tailwind"] }
];

import React from 'react'
import Button from './components/Button'
import Counter from './components/Counter'
import LikeButton from './components/LikeButton'

const SkillBadge =({skill})=> {
  return (
    <span>
         {skill}
    </span>
  )
}


const ProfileCard = ({id, name,role,skills}) => {

  
  return (
    <div>
              <h2>{id}</h2>
            <h3>Name:{name}</h3>
             <p>Role : {role}</p>
             {
              skills.map((skill)=>(
                <SkillBadge  key={skill}  skill = {skill}/>
              ))
             }

             
        
    </div>
  )
}





function App() {
    
  const Person = {
        name: 'Ayoola',
        age: 20,
        country: 'Nigeria',
        city: 'Lagos'
    }

    const fruits = ['apple', 'banana', 'orange', 'grape']


    const {name, age, country, city} = Person
    const [first,second, third, fourth] = fruits

    console.log(name, age)
    console.log(city, country)
    console.log(third)

  return (
    <> 
      
    <h1>Hello World</h1> 
      {/* <span> create a component called ProfileCard that accepts three props: name, imageUrl and role. It should render something like:
the image , Ayoola — Aspiring React Developer
Then use it in App.jsx at least 10 times with different images / names/roles, so you can see it's reusable. (Tip: you can destructure props directly in the function parameters like function ProfileCard({ name, role }) instead of writing props.name — try it either way, whichever makes sense to you first.)</span> */}
    
      <LikeButton/>
     <Greetings name = 'Ayoola'  country = 'Nigeria'/>
    <Greetings name = 'Ayesha'  country = ' Canada'/>
    <Greetings   country = 'United Kingdom'/>
    <Button ht='30px' wt = '100px' bgColor= 'green' text='Login'/>
    <Button ht = '40px' wt = '150px'  bgColor= 'yellow'  text= 'Sign Up'/>
    <Button/>
    <Button text='Register Now'/>
    <Button bRadius = '5px'  text='Dataslid'  />
    <Counter/>

    
     
     {
        teamMembers.map((member)=>(
          <ProfileCard 
            key={member.id}
            name = {member.name}
            role={member.role}
            skills = {member.skills}


          />
           
        ))
     }
    
    
          
    </>
  )
}

export default App
