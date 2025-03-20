import CartoonGenre from '@/components/CartoonGenre';
import { getAllCartoonGenres, findAllComics } from '@/services/cartoonServices';
import React from 'react'

const OldSchoolCartoonsPage = async ({ searchParams }) => {
    const genres = await getAllCartoonGenres();
    const comicsBooks = await findAllComics();
    const { genre = null } = await searchParams;
    const filteredComics = genre
        ? comicsBooks.payload.filter(comic => comic.ct_genre_id === parseInt(genre))
        : comicsBooks.payload

    return (
        <CartoonGenre comicBook={filteredComics} genres={genres.payload} selectedGenre={genre}/>
    )   
}

export default OldSchoolCartoonsPage
