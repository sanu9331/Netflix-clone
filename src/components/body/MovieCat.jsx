import React from 'react';
import './Banner.css';
import './MovieCat.css';
import { useState, useEffect } from 'react';
import { instance as axios } from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';
import YouTube from 'react-youtube';


export default function MovieCat(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            // setMovies(response.data.results);
            if (props.url.includes('popular')) {
                setMovies(response.data.results);
            } else {
                setMovies(response.data.items);
            }

        }).catch((err) => {
            alert('network error!!');
        })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovieTrailer = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0]);
            } else {
                console.log('array empty');
            }
        })
    }
    return (
        <div style={{ backgroundImage: `url('https://www.dolby.com/siteassets/xf-site/blocks/hero/netflix-gradient.png?width=1440')` }}>
            <div className='cat-name'>
                <h6 className='cat-title'>{props.title}</h6>
                <div className='posters'>
                    {movies.map((item, index) => (
                        <img onClick={() => handleMovieTrailer(item.id)} key={index} className={props.isSmall ? 'isSmall-poster' : 'poster'} alt='poster' src={`${imageUrl + item.backdrop_path}`} />
                    ))}


                </div>
            </div>
            {urlId && < YouTube videoId={urlId.key} opts={opts} />}
        </div >
    )
}
