import { motion } from 'framer-motion';
import { PopularMovie } from '../../pages/Movies';
import './styles.css';

type Movie = {
  movie: Pick<PopularMovie, 'id' | 'title' | 'backdrop_path'>;
};

export function Movie({ movie }: Movie) {
  return (
    <motion.div
      className="movie"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <h2 className="movieTitle">{movie.title}</h2>
      <img
        className="movieImage"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        loading="lazy"
      />
    </motion.div>
  );
}
