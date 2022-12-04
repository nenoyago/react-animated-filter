import { useEffect } from 'react';
import { PopularMovie } from '../../pages/Movies';
import { Genre } from '../../shared/enums/Genre';
import './styles.css';

type Filter = {
  popularMovies: PopularMovie[];
  activeGenre: Genre;
  onActiveGenre: (genre: Genre) => void;
  onFilterMovie: (movies: PopularMovie[]) => void;
};

export function Filter({
  popularMovies,
  activeGenre,
  onActiveGenre,
  onFilterMovie,
}: Filter) {
  useEffect(() => {
    if (activeGenre === Genre.all) {
      onFilterMovie(popularMovies);
      return;
    }

    const filtered = popularMovies.filter(movie =>
      movie.genre_ids.includes(activeGenre)
    );
    onFilterMovie(filtered);
  }, [activeGenre]);

  return (
    <div className="filterContainer">
      <button
        className={activeGenre === Genre.all ? 'active' : ''}
        onClick={() => onActiveGenre(Genre.all)}
      >
        All
      </button>
      <button
        className={activeGenre === Genre.action ? 'active' : ''}
        onClick={() => onActiveGenre(Genre.action)}
      >
        Action
      </button>
      <button
        className={activeGenre === Genre.comedy ? 'active' : ''}
        onClick={() => onActiveGenre(Genre.comedy)}
      >
        Comedy
      </button>
    </div>
  );
}
