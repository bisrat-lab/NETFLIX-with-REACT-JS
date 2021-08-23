import React, { useEffect, useState } from 'react';
import  '../Components/row.css'
const imageBaseUrl = "https://image.tmdb.org/t/p/original/"


function Row(props) {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await fetch(`https://api.themoviedb.org/3${props.fetchUrl}`)
                .then(res=> res.json())
                .then(data => {
                    const movieData = data.results;
                    setMovies(movieData)
                })
                .catch((err)=>{

                })
            return request
        }
        fetchData()
    },[props.fetchUrl])
    console.log(movies) 
    return (
        <div className='row'>
           <h2> {props.title}</h2> 
           <div className="poster">
                {movies.map((movie)=> (
                    <img 
                    className="poster"
                    src={`${imageBaseUrl}${movie.poster_path}`} alt="" />
                ))}
           </div>
        </div>
    )
}

export default Row
