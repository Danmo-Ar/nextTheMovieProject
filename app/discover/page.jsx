import MovieCard from '../../components/MovieCard/MovieCard';

const movies = [
    {
        id: 1,
        title: 'Film 1',
    },
    {
        id: 2,
        title: 'Film 2',
    },
];

const DiscoverPage = () => {
    return (
        <div>
            {movies.map(movie => {
                return <MovieCard key={movie?.id} {...movie} />;
            })}
        </div>
    );
};
export default DiscoverPage;
