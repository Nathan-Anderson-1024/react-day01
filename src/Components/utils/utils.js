import React from 'react'

export default function Utils() {
  const getMoviesByName = async (inputString) => {
    const apiKey = '';
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${inputString}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  }
  const getMovieDetailsById = async (omdbID) => {
    const apiKey = '';
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${omdbID}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  }
  return (
    <div>
        
    </div>
  )
}
