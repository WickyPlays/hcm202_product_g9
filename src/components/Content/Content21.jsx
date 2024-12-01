import './Content21.scss'
import image from '../../assets/content21_1.jpg'

export default function Content21() {
  return (
    <div className="content-21">
      <div className="grid">
        <div>
          <p className='title'><span className='node'>2</span> Nội dung tư tưởng về đoàn kết quốc tế</p>
          <p className='tag'>2.1. Sự cần thiết phải đoàn kết quốc tế</p>
          <p className='content'>Hồ Chí Minh nhận thức rõ tầm quan trọng của đoàn kết quốc tế trong cuộc đấu tranh giành độc lập dân tộc và bảo vệ hòa bình thế giới. Người khẳng định rằng cách mạng Việt Nam không thể tách rời khỏi phong trào cách mạng quốc tế. Đoàn kết quốc tế là yếu tố quyết định để xây dựng sức mạnh tổng hợp trong đấu tranh chống đế quốc, thực dân và các thế lực phản động.</p>
        </div>
        <div>
          <img src={image} alt='21' />
        </div>
      </div>
    </div>
  )
}