import Content11 from '../Content/Content11'
import Content12 from '../Content/Content12'
import ContentCourseIntro from '../Content/ContentCourseIntro'
import ContentGeminiPrompt from '../Content/ContentGeminiPrompt'
import ContentIntro from '../Content/ContentIntro'
import './HomeContent.scss'

export default function HomeContent() {
  return (
    <div className="home-content">
      <ContentIntro />
      <ContentCourseIntro />
      <Content11 />
      <Content12 />
      <ContentGeminiPrompt />
    </div>
  )
} 