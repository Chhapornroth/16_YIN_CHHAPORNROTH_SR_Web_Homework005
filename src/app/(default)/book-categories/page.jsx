import React from 'react'
import { findBooksByTitle, getAllBookCategories, getAllBooks } from '@/services/bookServices';
import BookCategories from '@/components/BookCategories';

const BookCategoriesPage = async ({ searchParams }) => {
  const books = await getAllBooks();
  const categories = await getAllBookCategories();

  const { query = null, search = null } = await searchParams;

  const baseBooks = search
    ? (await findBooksByTitle(search)).payload
    : books.payload;

  const filteredBooks = query
    ? baseBooks.filter(book => book.book_cate_id === parseInt(query))
    : baseBooks;

  return (
    <BookCategories books={filteredBooks} categories={categories.payload} selectedCategory={query} />
  )
}

export default BookCategoriesPage;