import { Search } from 'lucide-react';
import React from 'react';

const SearchComp = ({ isOpen, toggleSearch }) => {
  if (!isOpen) return null; // Don't render the search bar if it's closed

  return (
    <div className=" fixed top-[6.5em] right-2 w-[50vw] h-[12em]  flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg  w-full text-xl flex">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-4 border  rounded-lg text-[18px]"
        />
        <button
        
          className="mt-2  text-black py-4 px-4 rounded-lg"
        >
           <Search />
        </button>
      </div>
    </div>
  );
};

export default SearchComp;
