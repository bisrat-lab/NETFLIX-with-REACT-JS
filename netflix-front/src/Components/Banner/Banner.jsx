import React, { useEffect, useState } from 'react'
import request from '../../Assets/requests'
import "../Banner/Banner.css"
function Banner() {
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        async function fetchData(){
           const requestData  = await fetch(`https://api.themoviedb.org/3${request.fetchNetflixOriginals}`)
            .then(res=>res.json())
            .then(data=>{
                const movieData = data.results
                setMovie(movieData[Math.floor(Math.random()*movieData.length -1 )])
                
            })
            return requestData
        }
        fetchData();
    },[])
    // console.log(movie)
    return (
     <header className="banner" 
     style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
     }}>
         <div className="banner-contanier">
            <h1 className="banner-title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_discription">{movie?.overview}</h1>
         </div>
         <div className="banner-fadeBottom"/>
     </header>
    )
}

export default Banner
