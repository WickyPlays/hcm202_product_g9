import './Content31.scss'
import circle from '../../assets/circle.png';
import vinhhalong from '../../assets/vinhhalong.jpg';

export default function Content31() {
  return (
    <div className="content-31">
       <div className='intro' style={{backgroundImage: 'url(' + vinhhalong + ')' }}>
        <div className='circle' style={{backgroundImage: 'url(' + circle + ')' }}></div>
        <p className='course'>Câu hỏi CQ</p>
        <p className='title'>"Dĩ bất biến, ứng vạn biến" của Hồ Chí Minh có phải là khởi đầu của trường phái ngoại giao "Cây tre Việt Nam" hiện nay?</p>
      </div>
    </div>
  )
}