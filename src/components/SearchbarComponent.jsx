'use client'

import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchbarComponent = () => {
    const [inputTitle, setInputTitle] = useState('');
    const router = useRouter();
    const pathName = usePathname();
    const handleSubmit = (e) => {
        e.preventDefault();
        switch(pathName){
            case "/book-categories":{
                router.push(`/book-categories?search=${inputTitle}`);
                break;
            }
            case "/old-school-cartoons":{
                router.push(`/old-school-cartoons?search=${inputTitle}`);
                break;
            }
        }
    } 
    return (
        <div >
            <form className="relative w-full" onSubmit={handleSubmit}>
                {/* search button */}
                <button className="cursor-pointer" type="submit">
                    <Search className="w-6 h-6 text-primary-text absolute top-3 left-4" />
                </button>

                {/* search input */}
                <input
                    type="text"
                    placeholder="Search book or category"
                    className="w-full bg-white py-3 pl-14 pr-5 rounded-[50px] h-12 border-none focus:border-none focus:ring-0 focus:outline-[#59d5e0] text-[#155281]"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchbarComponent