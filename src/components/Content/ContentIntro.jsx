import './ContentIntro.scss'
import circle from '../../assets/circle.png';

export default function ContentIntro() {
  return (
    <div className="content-intro">
       <div className='intro'>
        <div className='circle-intro-0' style={{backgroundImage: 'url(' + circle + ')' }}></div>
        <div className='circle-intro-1' style={{backgroundImage: 'url(' + circle + ')' }}></div>
        <p className='title'>Lời nói đầu</p>
        <p className='course'>Tư tưởng Hồ Chí Minh về Đoàn kết Quốc tế</p>
        <div className='content-list'>
          <p><span>1</span> Lời nói đầu, giới thiệu chung</p>
          <p><span>2</span> Nội dung tư tưởng về đoàn kết quốc tế</p>
          <p><span>3</span> Câu hỏi CQ: ""Dĩ bất biến, ứng vạn biến" của Hồ Chí Minh có phải là khởi đầu của trường phái ngoại giao "Cây tre Việt Nam" hiện nay?"</p>
          <p><span>4</span> Tương tác AI</p>
          <p><span>5</span> Minigames!</p>
        </div>
      </div>
    </div>
  )
}