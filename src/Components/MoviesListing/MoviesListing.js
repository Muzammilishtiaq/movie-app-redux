import React, { useEffect } from 'react';
import './MoviesListing.scss';
import MovieApi from '../../Api/MovieApi';
import {APIKEY} from '../../Api/MovieApiKey'

const MoviesListing = () => {
    const search = "harry"
    useEffect(()=>{
        const fetchMovie = async ()=>{
const response = await MovieApi.get(`?apikey=${APIKEY}&s=${search}&type=movie`)
.catch((err)=>{console.log('error',err)})
console.log('api data',response)
        }
        fetchMovie()
    },[])
    return (
        <div>
            movie listing
        </div>
    );
};

export default MoviesListing;