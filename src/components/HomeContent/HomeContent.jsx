import Content11 from '../Content/Content11'
import ContentCourseIntro from '../Content/ContentCourseIntro'
import ContentGeminiPrompt from '../Content/ContentGeminiPrompt'
import ContentIntro from '../Content/ContentIntro'
import './HomeContent.scss'

export default function HomeContent() {
  return (
    <div className="home-content">
      <div className='intro'>
        <p>Lời nói đầu</p>
      </div>
      <ContentIntro />
      <ContentCourseIntro />
      <Content11 />
      <ContentGeminiPrompt />
    </div>
  )
} 