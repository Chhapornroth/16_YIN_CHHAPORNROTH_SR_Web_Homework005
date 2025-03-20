'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import DashboardComponent from '@/components/DashboardComponent';
import BookCardComponent from './BookCardComponent';
import { SelectItem } from '@/components/ui/select';

const BookCategories = ({ books, categories , selectedCategory, searchByTitle}) => {
  const router = useRouter();

  const dropdown = categories.map(category => (
    <SelectItem key={category.id} value={category.id}>{category.book_cate_name}</SelectItem>
  ));

  const handleCategoryChange = (value) => {
    if (value) {
      router.push(`/book-categories?query=${value}`);
    } else {
      router.push('/book-categories');
    }
  };


  return (
    <DashboardComponent dropdown={dropdown} onCategoryChange={handleCategoryChange}>
      <div key={selectedCategory === null ? "All Books" : categories[selectedCategory - 1].book_cate_name} className='grid grid-cols-2 w-full place-items-center pt-30 mx-auto'>
        {books.map(book => (
          <BookCardComponent book={book} key={book.id} />
        ))}
      </div>
    </DashboardComponent>
  );
};

export default BookCategories;