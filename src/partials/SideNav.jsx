import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <div className="w-[25%] h-full p-4 border-r-2 border-zinc-700">
      <h1 className="font-bold text-3xl tracking-tighter">
        <i className="text-[#6556CC] ri-movie-2-line"></i> Movie Glimpse.
      </h1>
      <nav className="mt-5 px-2">
        <h3 className="font-semibold tracking-tight text-lg mb-2">News Feeds</h3>
        {[
          { icon: <i className="ri-fire-fill"></i>, title: "Trending", to: `/trending` },
          { icon: <i className="ri-bard-fill"></i>, title: "Popular", to: `/popular` },
          { icon: <i className="ri-movie-fill"></i>, title: "Movies", to: `/movie` },
          { icon: <i className="ri-tv-2-line"></i>, title: "TV Shows", to: `/tv` },
          { icon: <i className="ri-team-fill"></i>, title: "People", to: `/person` },
        ].map((elem) => (
          <Link
            key={elem.title}
            to={elem.to}
            className="inline-block hover:bg-[#6556CC] hover:text-white font-semibold duration-75 text-zinc-400 p-4 w-full rounded-md"
          >
            {elem.icon} {elem.title}
          </Link>
        ))}
      </nav>
      <hr />
      <nav className="mt-5 px-2">
        <h3 className="font-semibold tracking-tight text-lg mb-2">Website Information</h3>
        {[
          { icon: <i className="ri-information-2-fill"></i>, title: "About Movie Glimpse", to: `/` },
          { icon: <i className="ri-phone-fill"></i>, title: "Contact Us", to: `/` },
        ].map((elem) => (
          <Link
            key={elem.title}
            to={elem.to}
            className="inline-block hover:bg-[#6556CC] hover:text-white font-semibold duration-75 text-zinc-400 p-4 w-full rounded-md"
          >
            {elem.icon} {elem.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default SideNav;
