import { findBookById } from '@/services/bookServices';
import { findComicBookById } from '@/services/cartoonServices';
import {
  Home,
  BookText,
  BookOpenText,
  Link2Icon,
  Eye
} from 'lucide-react'
import Link from 'next/link'


const ReadFullArticle = async ({ param, searchParam }) => {
  let data, urlNavigator, image, _title, writer, description;
  const { id } = await param;
  const { type, name, title } = await (searchParam);

  switch (type) {
    case "book": {
      const response = await findBookById(id);
      data = response.payload;
      urlNavigator = "/book-categories";
      image = data.image;
      _title = data.book_title;
      writer = data.book_author;
      description = data.description;
      break;
    }
    case "cartoon": {
      const response = await findComicBookById(id);
      data = response.payload;
      urlNavigator = "/old-school-cartoons";
      image = data.image;
      _title = data.ct_title;
      writer = data.ct_creator;
      description = data.ct_description;
      break;
    }
  }

  return (
    <>
      <div className='pt-10 w-[80%] mx-auto'>
        <div className='flex items-center text-[#155281] gap-5'>
          <Link href="/" className='group flex gap-2 items-center hover:text-[#1075AB]'>
            <Home className="w-5 h-5 text-primary-text transition-all duration-300 group-hover:hidden" />
            <Link2Icon className='w-5 h-5 text-primary-text transition-all duration-300 group-hover:inline-block hidden' />
            <p className='font-medium'>Home</p>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="#0B3954" strokeLinecap="round" strokeLinejoin="round" strokeliterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
          <Link href={urlNavigator} className='group flex gap-2 items-center hover:text-[#1075AB]'>
            <BookText className="w-5 h-5 text-primary-text transition-all duration-300 group-hover:hidden" />
            <Link2Icon className='w-5 h-5 text-primary-text transition-all duration-300 group-hover:inline-block hidden' />
            <p className='font-medium capitalize'>{name}</p>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="#0B3954" strokeLinecap="round" strokeLinejoin="round" strokeliterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
          <div className='flex gap-2 items-center text-red-600'>
            <BookOpenText className='w-5 h-5 text-primary-text' />
            <h3 className='font-medium'>{_title}</h3>
          </div>
        </div>

        <div className="bg-white mt-32 max-h-full p-20 pb-14 rounded-t-[50px]">
          <div className="flex justify-end relative">
            <img alt="cover" width="250" height="300" className="rounded-3xl drop-shadow-xl absolute -top-52" style={{ color: 'transparent' }} src={image} />
          </div>
          <div className="space-y-5 mt-30">
            <div className="space-y-3">
              <h2 className="text-xl font-medium text-[#155281]">{_title}</h2>
              <h3 className="text-lg">
                <span className="font-medium text-[#1075AB]"><span className="text-[#155281] font-normal">by </span>{writer}</span>
              </h3>
              {type === "cartoon" && (
                <div className="text-sm text-[#1075AB] font-medium flex gap-3 items-center">
                  <p className="flex gap-2  items-center">
                    <Eye className='w-4' />
                    <span>{data.view_count}</span>
                    times
                  </p>
                  <p> | </p>
                  <p>{data.published_year}</p>
                </div>
              )}
            </div>
            <p className="text-justify text-[#155281]">{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadFullArticle