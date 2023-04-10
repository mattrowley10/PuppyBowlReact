import React from 'react'
import { useState, useEffect } from 'react'



export default function fetch() {
    const [puppyId, setPuppyId] = useState(1);
    const [puppyData, setPuppyData] = useState(null);
    const [error, setError] = useState(null)
    useEffect(() => {
      async function fetchPuppy(){
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/2301-FTB-ET-WEB-AM/players/1');
        const puppyData = await response.json();
        setPuppyData(puppyData)
      }
    fetchPuppy();

      return () => {
        setError(null)
      }
    }, [puppyId])
    
}
