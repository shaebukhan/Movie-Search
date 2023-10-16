import React from 'react';

const Search = ({ searchMovie, setSearchMovie, fetchMovieData }) => {
    return (
        <div className='main flex justify-center py-5 px-4'>
            <input type="text" value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)} placeholder='Search here' className=' bg-gray-200 placeholder-gray-400 p-2 outline-none border-2 border-gray-500 text-black rounded-l-lg w-80' />
            <button onClick={fetchMovieData} className='bg-[#40407a] px-4 text-white rounded-r-lg'>Search</button>
        </div>
    );
};

export default Search;