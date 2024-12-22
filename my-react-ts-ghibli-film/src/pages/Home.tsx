import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Film {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error("Error fetching films:", error));
  }, []);

  return (
    <div style={{ backgroundColor: "cornflowerblue" }}>
      <h1>Studio Ghiblie Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id} style={{ listStyle: "none" }}>
            <h2>{film.title}</h2>
            <p>{film.description.slice(0, 100)}...</p>

            <Link to={`/film/${film.id}`}>
              <img
                src={film.image}
                alt={film.title}
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
            <br></br>
            <Link to={`/film/${film.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;