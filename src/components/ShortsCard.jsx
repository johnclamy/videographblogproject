import { useRef, useState } from 'react'
import ShortsCardHeader from './ShortsCardHeader'

const ShortsCard = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const youTubeRef = useRef(null)

  const handleClick = () => {
    if (isPlaying) {
      youTubeRef.current.pause()
      setIsPlaying(false)
    } else {
      youTubeRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="w-100 mb-2">
      <ShortsCardHeader />
      <video
        src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        className="w-100 border border-dark rounded-3"
        alt="Short Video App"
        loop
        ref={youTubeRef}
        onClick={handleClick}
      />
    </div>
  );
};

export default ShortsCard;
