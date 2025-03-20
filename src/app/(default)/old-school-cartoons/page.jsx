import CartoonGenre from '@/components/CartoonGenre';
import { getAllCartoonGenres, findAllComics, findComicsByTitle } from '@/services/cartoonServices';
import React from 'react'

const OldSchoolCartoonsPage = async ({ searchParams }) => {
    const comicsBooks = await findAllComics();
    const genres = await getAllCartoonGenres();

    const { genre = null, search = null } = await searchParams;

    const baseComics = search
        ? (await findComicsByTitle(search)).payload
        : comicsBooks.payload;

    const filteredComics = genre
        ? baseComics.filter(comic => comic.ct_genre_id === parseInt(genre))
        : baseComics;

    return (
        <CartoonGenre comicBooks={filteredComics} genres={genres.payload} selectedGenre={genre} />
    )
}

export default OldSchoolCartoonsPage
