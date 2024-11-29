import { useEffect, useState } from 'react'
import './Background.scss'
import bg from '../../assets/bg.mp4'
import vietnam from '../../assets/vietnam_flag.mp4'

export default function Background() {
  const [currentVideo, setCurrentVideo] = useState(bg)

  useEffect(() => {
    const targetElement = document.querySelector('.content-31')

    const handleScroll = () => {
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect()
        if (rect.top <= 0) {
          setCurrentVideo(vietnam)
        } else {
          setCurrentVideo(bg)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='background'>
      <video src={currentVideo} autoPlay loop muted />
    </div>
  )
}
