import Link from 'next/link'
import React from 'react'
import { Eye } from 'lucide-react'

export const CartoonCardComponent = ({comicBook}) => {
    return (
        <Link className="space-y-4 mb-15" href={`/read-full-article/${comicBook.id}?type=cartoon&name=old+school+cartoons&title=${comicBook.ct_title}`}>
            <div className="w-56 h-78 relative">
                <img src={comicBook.image} alt="" className="rounded-2xl" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
            </div>
            <div>
                <h2 className="font-medium mb-1 text-[#155281]">{comicBook.ct_title}</h2>
                <div className="text-sm text-[#1075AB] font-medium flex gap-3 items-center">
                    <p className="flex gap-2  items-center">
                        <Eye className='w-4'/>
                        <span>{comicBook.view_count}</span>
                        times
                    </p>
                    <p> | </p>
                    <p>{comicBook.published_year}</p>
                </div>
            </div>
        </Link>
    )
}
