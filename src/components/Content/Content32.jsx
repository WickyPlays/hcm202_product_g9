import { useEffect, useState, useRef } from "react";
import './Content32.scss';

export default function Content32() {
  const [activeSection, setActiveSection] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  const translateX = useRef('translateX(0)');
  const sectionsTitles = [
    "Giới thiệu về câu nói 'Dĩ bất biến, ứng vạn biến'",
    "Khái niệm ngoại giao 'Cây tre Việt Nam'",
    "Mối liên hệ giữa 'Dĩ bất biến, ứng vạn biến' và ngoại giao 'Cây tre Việt Nam'",
    "Ngoại giao 'Cây tre Việt Nam' trong thời hiện đại",
    "Kết luận"
  ];

  const sectionsContent = [
    "Câu nói của Hồ Chí Minh, “Dĩ bất biến, ứng vạn biến,” nhấn mạnh sự kiên định với các nguyên tắc và mục tiêu chiến lược trong khi linh hoạt trong ứng xử để thích nghi với tình hình thay đổi. “Dĩ bất biến” là sự kiên định với các giá trị cốt lõi, trong khi “ứng vạn biến” là khả năng linh hoạt, sáng tạo trong chiến lược.",
    <div className='section-content'>
      <p>Ngoại giao “Cây tre Việt Nam” do Tổng Bí thư Nguyễn Phú Trọng phát triển lấy hình ảnh cây tre làm biểu tượng cho đường lối đối ngoại Việt Nam. Trường phái này được mô tả qua ba yếu tố:</p>
      <ul>
        <li><strong>Gốc vững:</strong> Kiên định với các nguyên tắc và giá trị cốt lõi.</li>
        <li><strong>Thân chắc:</strong> Dẻo dai, bền bỉ, có khả năng thích ứng nhưng vẫn giữ vững độc lập tự chủ.</li>
        <li><strong>Cành uyển chuyển:</strong> Linh hoạt, mềm mại trong ứng xử và sách lược đối ngoại.</li>
      </ul>
    </div>,
    <div className='section-content'>
      <p style={{marginBottom: '20px'}}><strong>Gốc vững = Dĩ bất biến:</strong> Câu nói của Hồ Chí Minh về sự kiên định với nguyên tắc và giá trị cốt lõi của dân tộc, ví dụ như giữ vững độc lập, chủ quyền quốc gia. Đây là sự phản ánh của "gốc vững" trong hình ảnh cây tre.</p>
      <p><strong>Cành uyển chuyển = Ứng vạn biến:</strong> Sự linh hoạt trong chiến lược đối ngoại, thể hiện qua việc Việt Nam thích nghi và sáng tạo trong các tình huống quốc tế biến động.</p>
    </div>,
    <div className='section-content'>
      <p>Trường phái ngoại giao này không chỉ là sự kế thừa của tư tưởng Hồ Chí Minh mà còn là sự hiện đại hóa của nó trong bối cảnh toàn cầu hóa. Việt Nam hiện nay:</p>
      <ul>
        <li><strong>Gốc vững:</strong> Duy trì độc lập, tự chủ và bảo vệ lợi ích quốc gia, tôn trọng luật pháp quốc tế.</li>
        <li><strong>Thân chắc:</strong> Xây dựng nền tảng nội lực mạnh mẽ để đối phó với các thách thức toàn cầu.</li>
        <li><strong>Cành uyển chuyển:</strong> Linh hoạt trong việc đa dạng hóa và đa phương hóa quan hệ quốc tế, phù hợp với sự thay đổi của tình hình thế giới.</li>
      </ul>
    </div>,
    "Câu nói “Dĩ bất biến, ứng vạn biến” của Hồ Chí Minh không chỉ là chiến lược sống còn trong bối cảnh đầy biến động của lịch sử, mà còn là kim chỉ nam cho ngoại giao Việt Nam. Trường phái ngoại giao “Cây tre Việt Nam” phản ánh bản lĩnh của dân tộc Việt Nam trong việc giữ vững nguyên tắc, nhưng vẫn linh hoạt, thích nghi với tình hình quốc tế thay đổi."
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-content-32');
      const viewportHeight = window.innerHeight;
  
      let minDistanceToMiddle = Infinity;
      let active = null;
  
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const middleOfViewport = viewportHeight / 2;
        const distanceToMiddle = Math.abs(rect.top + rect.height / 2 - middleOfViewport);
  
        if (distanceToMiddle < minDistanceToMiddle) {
          minDistanceToMiddle = distanceToMiddle;
          active = index + 1;
        }
      });
  
      setActiveSection(active);
  
      const totalHeight = document.documentElement.scrollHeight - viewportHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
  
      const firstSectionTop = sections[0]?.getBoundingClientRect().top;
      const lastSectionBottom = sections[sections.length - 1]?.getBoundingClientRect().bottom;
  
      if (firstSectionTop <= viewportHeight && lastSectionBottom >= 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  

  useEffect(() => {
    const calculateTransform = () => {
      const navbarContent = document.querySelector('.navbar-content-32');
      const highlightedItem = document.querySelector('.nav-item-32.highlighted');

      if (navbarContent && highlightedItem) {
        const navbarCenter = navbarContent.offsetWidth / 2;
        const itemOffset = highlightedItem.offsetLeft + highlightedItem.offsetWidth / 2;
        return `translateX(${navbarCenter - itemOffset}px)`;
      }
      return translateX.current;
    };

    translateX.current = calculateTransform();
  }, [activeSection]);

  const handleNavClick = (index) => {
    const sections = document.querySelectorAll('.section-content-32');
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="content-32">
      <p className="tag">Ngoại giao “Cây tre Việt Nam”</p>
      <div className="content">
        {sectionsTitles.map((title, index) => (
          <div
            key={index}
            className={`section-content-32 ${activeSection === index + 1 ? 'active' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <h2>{index + 1}. {title}</h2>
            <p>{sectionsContent[index]}</p>
          </div>
        ))}
      </div>

      <div className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        <div className="navbar-content-32"
          style={{
            transform: translateX.current,
            transition: 'transform 0.3s ease',
          }}
        >
          {sectionsTitles.map((title, index) => (
            <span
              key={index}
              className={`nav-item-32 ${activeSection === index + 1 ? 'highlighted' : ''}`}
              onClick={() => {
                const sections = document.querySelectorAll('.section-content-32');
                sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              {title}
            </span>
          ))}
        </div>
        <div className="progress-bar" style={{ width: `${(activeSection * 100) / sectionsTitles.length}%` }}></div>
      </div>
    </div>
  );
}
