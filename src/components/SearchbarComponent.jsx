import React from 'react'
import { Search } from "lucide-react";

const SearchbarComponent = () => {
    return (
        <div >
            <form className="relative w-full">
                {/* search button */}
                <button className="cursor-pointer">
                    <Search className="w-6 h-6 text-primary-text absolute top-3 left-4" />
                </button>

                {/* search input */}
                <input
                    type="text"
                    placeholder="Search book or category"
                    className="w-full bg-white py-3 pl-14 pr-5 rounded-[50px] h-12 border-none focus:border-none focus:ring-0 focus:outline-[#59d5e0] text-[#155281]"
                />
            </form>
        </div>
    )
}

export default SearchbarComponent