import { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0); 
    const [animate, setAnimate] = useState(false); // Estado para controlar la animación

    const handleClick = () => {
      if (!liked) {
        setLikeCount(likeCount + 1);
      } else {
        setLikeCount(likeCount - 1);
      }
      setLiked(!liked);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000); // Desactiva la animación después de 1 segundo (1000ms)
    };
    
    return (
        <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={liked ? "#8c2b24" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={liked ? "#8c2b24" : "#4f4f4f"}
              className={`w-6 h-6 cursor-pointer ${animate ? 'animate-heartBeat' : ''}`}
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />          
            </svg>
            <span className="ml-2">{likeCount}</span>
        </div>
    );
}
