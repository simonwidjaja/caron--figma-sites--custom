import React, { useRef, useState, useEffect } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function VideoBlock({
  url,
  poster,
  title,
  description,
  autoPlay = false,
  muted = false,
  looped = false,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (videoRef.current) {
      if (autoPlay) {
        videoRef.current.play().catch((error) => {
          console.log('Autoplay prevented:', error);
          setIsPlaying(false);
        });
      }
    }
  }, [autoPlay]);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden group bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={url}
        poster={poster}
        muted={muted}
        loop={looped}
        playsInline
        onPause={handleVideoPause}
        onPlay={handleVideoPlay}
        onClick={togglePlay}
      />

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 cursor-pointer"
            onClick={togglePlay}
        >
          <button
            onClick={handlePlayClick}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Play video"
          >
            <PlayIcon className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1" />
          </button>
        </div>
      )}

      {/* Text Overlay */}
      {(title || description) && (
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <div className="max-w-3xl">
            {title && (
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-white/90 text-base md:text-lg drop-shadow-md">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
