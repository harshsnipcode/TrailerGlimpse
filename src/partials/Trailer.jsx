import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function Trailer() {
   const navigate = useNavigate()
   const {pathname} = useLocation();
   const category = pathname.includes('movie') ? 'movie' : 'tv';
   const ytVideo = useSelector(state => state[category].info.videos);
   console.log("📺 ytVideo from selector:", ytVideo);
   console.log("🔄 Category:", category);
   console.log("🎬 About to render:", ytVideo ? "iframe" : "Not Found");
   console.log("🔗 YouTube URL being passed to iframe:", `https://www.youtube.com/embed/${ytVideo.key}`);

  return (
    <div className='text-white w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,.9)] flex items-center justify-center'>
        {ytVideo ? (
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${ytVideo.key}`}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <h1>Not Found</h1>
        )}
       
        <i
          onClick={() => navigate(-1)}
          className="absolute top-10 left-6 ri-arrow-left-line text-4xl hover:text-[#6556CC]"
        ></i>
    </div>
  ) 
}

export default Trailer;
