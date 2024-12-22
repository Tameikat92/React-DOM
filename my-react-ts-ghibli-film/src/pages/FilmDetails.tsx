import { error } from "console";
import React,{useState,useEffect} from "react";
import { useParams, Link, data } from "react-router-dom";

interface FilmDetailsData {
    title: string;
    description: string;
    director: string;
    producer: string;
    release_date: string
}

const FilmDetails: React.FC = () => {
const {id} = useParams<{id: string}>();
const [film,setFilm] = useState<FilmDetailsData | null>(null);

useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films/${id}')
    .then((response)=> response.json())
    .then((data)=> setFilm(data))
    .catch((error)=> console.error('Error fetching film details',error))
},[id]); //link has id in it.
 return(
    <div>
        {film ? (
            <div>
                <h1> {film.title}</h1>
                <p> <strong>{film.description}</strong></p>
                <p> <strong>{film.director}</strong></p>
                <p> <strong>{film.producer}</strong></p>
                <p> <strong>{film.release_date}</strong></p>
                
                <Link to='/'> Et Go Home</Link>
            </div>
        ) : (
            <p> Loading...</p>
        )
    }
    </div>
 )
}
export default FilmDetails