import React, { useEffect, useState } from 'react';
import './Banner.css'; // Import custom CSS for styling
import { instance as axios } from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

export default function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then((response) => {
            // console.log(response.data.results[0]);
            // setMovie(response.data.results[0]);
            const movies = response.data.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        })
    }, [])
    return (
        <div className="banner-container">
            <div className="banner-background" style={{
                backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`
            }}></div>
            < div className='movie-details' >
                <h1 className="banner-title">{movie ? movie.title : ''}</h1>
                <button className='play-button'><b>play</b></button>  <button className='play-button'><b>my list</b></button>
                <p className="banner-info"></p>
                <p className="banner-description">
                    {movie ? movie.overview : ''}
                </p>
            </div>
        </div >
    );
}
