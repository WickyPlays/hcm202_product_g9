import './Background.scss'
import bg from '../../assets/bg.mp4'

export default function Background() {
  return (
    <div className='background'>
      <video src={bg} autoPlay loop muted></video>
    </div>
  )
}