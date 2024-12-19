import React from 'react'
import { BiX } from 'react-icons/bi'
import YouTube, { YouTubeEvent } from 'react-youtube'
import IconElement from '../elements/IconElement'
import { RxVideo } from 'react-icons/rx'

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
                              className='border-2 border-white/10 bg-dark rounded-md float-right mb-2'>
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
                         className='border-2 border-white/10 bg-dark rounded-full p-2
                         text-sm font-medium text-white/80'>
                         <IconElement icon={RxVideo} className='size-7 ' />
                    </button>
               </div>
          )
     }

     return isOpen ? <Player /> : <ButtonTrigger />
}

export default VidePlayerLayout