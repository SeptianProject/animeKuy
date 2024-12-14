import React from 'react'
import { BiX } from 'react-icons/bi'
import YouTube, { YouTubeEvent } from 'react-youtube'

interface VidePlayerLayoutProps {
     youtubeId: string
}

const VidePlayerLayout: React.FC<VidePlayerLayoutProps> = ({ youtubeId }) => {
     const [isOpen, setIsOpen] = React.useState(false)
     const option = {
          height: '250',
          width: '250',
     }

     const handleVideoPlayer = () => {
          setIsOpen((prev) => !prev)
     }

     const Player = () => {
          return (
               <div className='fixed bottom-2 right-2'>
                    <div className=''>
                         <button onClick={handleVideoPlayer}
                              className='border-2 border-white/30 bg-primary rounded-md float-right mb-2'>
                              <BiX className='size-8' />
                         </button>
                         <YouTube
                              videoId={youtubeId}
                              onReady={(event: YouTubeEvent) => event.target.pauseVideo()}
                              opts={option}
                         />
                    </div>
               </div>
          )
     }

     const ButtonTrigger = () => {
          return (
               <div className='fixed bottom-5 right-5'>
                    <button
                         onClick={handleVideoPlayer}
                         className='border-2 border-white/30 bg-primary rounded-md px-4 py-3
                         text-sm font-medium'>
                         Tonton Trailer
                    </button>
               </div>
          )
     }

     return isOpen ? <Player /> : <ButtonTrigger />
}

export default VidePlayerLayout