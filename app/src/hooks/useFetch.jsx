import React, {  useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

   useEffect(()=>{
     const getData = async()=> {
          setLoading(true)
          setError('')
          try {
            const response = await fetch(url)
            if(!response.ok) {
                throw new Error (`Error Detected: ${response.status}`)
            }
            const results =  await response.json()
            setData(results)
          } catch (error) {
            setError(error.message)
          } finally{
            setLoading(false)
          }
     }  
     getData()
   }, [url])

  return {data,loading,error}
}

export default useFetch
