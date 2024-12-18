import Content11 from '../Content/Content11'
import Content12 from '../Content/Content12'
import Content21 from '../Content/Content21'
import Content22 from '../Content/Content22'
import Content23 from '../Content/Content23'
import Content24 from '../Content/Content24'
import Content25 from '../Content/Content25'
import Content26 from '../Content/Content26'
import Content31 from '../Content/Content31'
import Content32 from '../Content/Content32'
import Content41 from '../Content/Content41'
import Content51 from '../Content/Content51'
import ContentCourseIntro from '../Content/ContentCourseIntro'
import ContentIntro from '../Content/ContentIntro'
import './HomeContent.scss'

export default function HomeContent() {
  return (
    <div className="home-content">
      <ContentIntro />
      <ContentCourseIntro />
      <Content11 />
      <Content12 />
      <Content21 />
      <Content22 />
      <Content23 />
      <Content24 />
      <Content25 />
      <Content26 />
      <Content31 />
      <Content32 />
      <Content41 />
      <Content51 />
    </div>
  )
} 