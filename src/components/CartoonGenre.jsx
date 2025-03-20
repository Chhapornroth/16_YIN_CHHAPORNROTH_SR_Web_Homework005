'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import DashboardComponent from '@/components/DashboardComponent';
import { SelectItem } from '@/components/ui/select';
import { CartoonCardComponent } from './CartoonCardComponent';

const CartoonGenre = ({ comicBooks, genres, selectedGenre }) => {
  const router = useRouter();

  const dropdown = genres.map(genre => (
    <SelectItem key={genre.id} value={genre.id}>{genre.cartoon_genre}</SelectItem>
  ));

  const handleCategoryChange = (value) => {
    if (value) {
      router.push(`/old-school-cartoons?genre=${value}`);
    } else {
      router.push('/old-school-cartoons');
    }
  };

  return (
    <DashboardComponent dropdown={dropdown} onCategoryChange={handleCategoryChange}>
      <div key={selectedGenre === null ? "Old School Cartoons" : genres[selectedGenre - 1].cartoon_genre}  className='grid grid-cols-3 w-full place-items-center mx-auto pt-10'>
        {comicBooks.map(comic => (
          <CartoonCardComponent comicBook={comic} key={comic.id} />
        ))}
      </div>
    </DashboardComponent>
  );
};

export default CartoonGenre;