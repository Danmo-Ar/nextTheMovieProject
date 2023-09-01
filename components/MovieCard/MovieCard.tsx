import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({ id, title }) => {
    return (
        <Link href={`/discover/${id}`}>
            <article className="movie-card">
                <div className="movie-card__image">
                    <Image
                        src="/assets/images/music.jpg"
                        height={200}
                        width={200}
                        alt="Movie image"
                    />
                </div>
                <div className="movie-card__text">Movie {title} </div>
            </article>
        </Link>
    );
};
export default MovieCard;
