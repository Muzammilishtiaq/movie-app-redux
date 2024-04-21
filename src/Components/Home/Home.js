import React, { useEffect } from 'react';
import './Home.scss';
import MoviesListing from '../MoviesListing/MoviesListing'
import { useDispatch } from 'react-redux';
import MovieApi from '../../Api/MovieApi';
import {APIKEY} from '../../Api/MovieApiKey';
import { addMovies } from '../../features/movies/MovieSlice';

const Home = () => {
  const dispatch =  useDispatch();
  const search = "harry"
    useEffect(()=>{
        const fetchMovie = async ()=>{
const response = await MovieApi.get(`?apikey=${APIKEY}&s=${search}&type=movie`)
.catch((err)=>{console.log('error',err)})
// console.log('api data',response)
dispatch(addMovies(response.data))
        }
        fetchMovie()
    },[])
  return (
    <div>
      <MoviesListing/>
    </div>
  );
};

export default Home;