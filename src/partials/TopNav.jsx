import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  const [query, setQuery] = useState('');
  const [searchs, setSearchs] = useState([]);

  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearchs(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!query) {
      setSearchs([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      getSearch();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="w-full h-[12vh] flex p-2 relative items-center justify-between">
      <div className="w-[65%] rounded-lg ml-4 bg-zinc-700 h-full flex items-center gap-4">
        <i className="ri-search-line ml-5"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="bg-transparent w-[85%] outline-none"
          placeholder="Search Here"
        />
        {query.length > 0 ? (
          <i onClick={() => setQuery('')} className="ri-close-line mr-5 cursor-pointer"></i>
        ) : null}
      </div>

      {searchs.length > 0 && (
        <div className="dropDown z-30 flex flex-col gap-2 overflow-auto absolute w-[63%] max-h-[50vh] bg-zinc-700 top-[90%] left-7">
          {searchs.map((items) => {
            const imgSrc = items.backdrop_path || items.profile_path || items.poster_path
              ? `https://image.tmdb.org/t/p/original/${items.backdrop_path || items.profile_path || items.poster_path}`
              : '/fallback-image.jpg'; // Replace with actual fallback image path

            return (
              <Link
                to={`/${items.media_type}/details/${items.id}`}
                key={`${items.media_type}-${items.id}`}
                className="flex items-center hover:bg-zinc-200 hover:text-zinc-900 gap-5 w-full h-[20vh] px-4"
              >
                {imgSrc && (
                  <img
                    className="h-[10vh] w-[10vh] rounded-xl object-cover"
                    src={imgSrc}
                    alt={items.title || items.name || 'Search result image'}
                  />
                )}
                <h5 className="font-semibold">{items.original_title || items.title || items.name}</h5>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TopNav;
