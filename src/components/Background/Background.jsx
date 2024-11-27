import './Background.scss'

export default function Background() {
  return (
    <div className='background'>
      <video src="/bg.mp4" autoPlay loop muted></video>
    </div>
  )
}