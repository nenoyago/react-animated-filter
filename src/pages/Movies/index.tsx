import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Movie } from '../../components/Movie';
import { Filter } from '../../components/Filter';
import { Genre } from '../../shared/enums/Genre';

import './styles.css';

export type PopularMovie = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: string;
  release_date: string;
  genre_ids: number[];
};

function App() {
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>([]);
  const [filtered, setFiltered] = useState<PopularMovie[]>([]);
  const [activeGenre, setActiveGenre] = useState(Genre.all);

  const fetchPopularMovie = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_MOVIE_API}${import.meta.env.VITE_MOVIE_API_KEY}`
    );
    const data = await response.json();
    const movies = data.results as PopularMovie[];

    setPopularMovies(movies);
    setFiltered(movies);
  };

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  return (
    <div id="movies">
      <h1 className="title">
        <span>Popular</span> Movies
      </h1>
      <Filter
        popularMovies={popularMovies}
        onFilterMovie={setFiltered}
        activeGenre={activeGenre}
        onActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popularMovies">
        <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
