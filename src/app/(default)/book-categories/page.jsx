import React from 'react'
import { getAllBookCategories, getAllBooks } from '@/services/bookServices';
import BookCategories from '@/components/BookCategories';

const BookCategoriesPage = async ({ searchParams }) => {
  const books = await getAllBooks();
  const categories = await getAllBookCategories();
  const { query = null } = await searchParams;
  const filteredBooks = query
    ? books.payload.filter(book => book.book_cate_id === parseInt(query))
    : books.payload;
  return (
    <BookCategories books={filteredBooks} categories={categories.payload} selectedCategory={query}/>
  )
}

export default BookCategoriesPage;