import { useEffect, useState, useRef } from "react";
import './Content11.scss';
import image1 from '../../assets/content11_1.jpg';
import image2 from '../../assets/content11_2.jpg';
import image3 from '../../assets/content11_3.jpg';

export default function Content11() {
  const [activeSection, setActiveSection] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageStyle, setImageStyle] = useState({});
  const [fade, setFade] = useState(false);

  const imageContainerRef = useRef(null);
  const translateX = useRef('translateX(0)');

  const sectionsTitles = [
    "Đoàn kết quốc tế trong phong trào giải phóng dân tộc",
    "Đoàn kết quốc tế trong các đảng cộng sản và phong trào cách mạng",
    "Đoàn kết quốc tế với các quốc gia tiến bộ và dân chủ",
    "Đoàn kết quốc tế trong công cuộc đấu tranh chống đế quốc",
    "Đoàn kết quốc tế trong các tổ chức quốc tế",
    "Đoàn kết quốc tế trong việc giải quyết các vấn đề toàn cầu",
    "Đoàn kết quốc tế trong thời kỳ hiện đại và toàn cầu hóa",
  ];

  const sectionsContent = [
    "Hồ Chí Minh coi đoàn kết quốc tế là một trong những yếu tố quyết định thắng lợi trong cuộc đấu tranh chống chủ nghĩa thực dân và đế quốc. Người khẳng định rằng, các dân tộc bị áp bức cần phải liên kết, đoàn kết và hỗ trợ nhau trong công cuộc giành lại quyền tự quyết và độc lập.",
    "Hồ Chí Minh cho rằng đoàn kết giữa các đảng cộng sản và các tổ chức cách mạng quốc tế là yếu tố quan trọng trong việc xây dựng một mặt trận thống nhất, chống lại các thế lực phản động, bảo vệ quyền lợi của các dân tộc và của giai cấp công nhân toàn thế giới.",
    "Hồ Chí Minh không chỉ tìm kiếm sự ủng hộ từ các lực lượng cách mạng, mà còn mở rộng mối quan hệ với các quốc gia có nền dân chủ, hòa bình và công bằng, để xây dựng một liên minh quốc tế mạnh mẽ trong công cuộc bảo vệ hòa bình, chống lại các thế lực xâm lược.",
    "Đoàn kết quốc tế là một chiến lược quan trọng trong cuộc đấu tranh của Việt Nam để chống lại các thế lực đế quốc, thực dân, và các nước xâm lược. Hồ Chí Minh chủ trương không chỉ đấu tranh độc lập cho Việt Nam mà còn thúc đẩy sự đoàn kết của các quốc gia bị áp bức để giải phóng lẫn nhau khỏi ách thống trị của các đế quốc phương Tây.",
    "Một phần quan trọng trong tư tưởng Hồ Chí Minh về đoàn kết quốc tế là việc tham gia vào các tổ chức quốc tế, đặc biệt là Liên Hợp Quốc, để thúc đẩy quyền lợi của các quốc gia nhỏ và bảo vệ lợi ích quốc gia trong một thế giới đầy biến động.",
    "Hồ Chí Minh nhận thức rõ rằng trong thế giới hiện đại, các vấn đề toàn cầu như chiến tranh, đói nghèo, biến đổi khí hậu, và khủng hoảng tài chính chỉ có thể được giải quyết thông qua sự hợp tác và đoàn kết quốc tế. Người khẳng định rằng, các dân tộc trên thế giới cần phải gắn kết và hỗ trợ nhau trong việc xây dựng một thế giới hòa bình, công bằng và phát triển bền vững.",
    "Mặc dù tư tưởng Hồ Chí Minh được hình thành trong bối cảnh của thế kỷ XX, nhưng giá trị của tư tưởng này vẫn có ý nghĩa sâu sắc trong thời kỳ hiện đại, khi thế giới đang đối mặt với nhiều thách thức toàn cầu. Người đã nhận thức được tầm quan trọng của việc xây dựng các liên minh mạnh mẽ để giải quyết các vấn đề toàn cầu, từ biến đổi khí hậu đến bảo vệ hòa bình và quyền lợi của các dân tộc nhỏ.",
  ];
  const handleNavClick = (index) => {
    const sections = document.querySelectorAll('.section-content-11');
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-content-11');
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
  
      // Calculate progress bar width based on highlighted nav items
      const navbarContent = document.querySelector('.navbar-content-11');
      const navItems = document.querySelectorAll('.nav-item-11');
      const highlightedItems = [...navItems].filter((_, index) => index < active);
  
      if (highlightedItems.length > 0) {
        const totalHighlightedWidth = highlightedItems.reduce(
          (acc, item) => acc + item.offsetWidth,
          0
        );
        const progressWidth = (totalHighlightedWidth / navbarContent.offsetWidth) * 100;
        setProgress(progressWidth);
      }
  
      setShowNavbar(sections[0]?.getBoundingClientRect().top <= viewportHeight &&
        sections[sections.length - 1]?.getBoundingClientRect().bottom >= 0);
  
      let newImage = null;
      if (active === 2) newImage = image1;
      else if (active === 3 || active === 4) newImage = image2;
      else if (active === 5 || active === 6) newImage = image3;
  
      if (newImage !== currentImage) {
        setFade(true);
        setTimeout(() => {
          setCurrentImage(newImage);
          setFade(false);
        }, 100);
      }
  
      setImageStyle({
        top: '25%',
        left: `calc(${imageContainerRef.current?.getBoundingClientRect().left}px)`,
        maxWidth: `${imageContainerRef.current?.getBoundingClientRect().width}px`,
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImage]);
  

  useEffect(() => {
    const calculateTransform = () => {
      const navbarContent = document.querySelector('.navbar-content-11');
      const highlightedItem = document.querySelector('.nav-item-11.highlighted');

      if (navbarContent && highlightedItem) {
        const navbarCenter = navbarContent.offsetWidth / 2;
        const itemOffset = highlightedItem.offsetLeft + highlightedItem.offsetWidth / 2;
        return `translateX(${navbarCenter - itemOffset}px)`;
      }
      return translateX.current;
    };

    translateX.current = calculateTransform();
  }, [activeSection]);

  return (
    <div className="content-11">
      <div className="content">
        <div>
          {sectionsTitles.map((title, index) => (
            <div
              key={index}
              className={`section-content-11 ${activeSection === index + 1 ? 'active' : ''}`}
            >
              <h2>{index + 1}. {title}</h2>
              <p>{sectionsContent[index]}</p>
            </div>
          ))}
        </div>
        <div ref={imageContainerRef} className={`image-container-11 ${currentImage ? 'visible' : 'hidden'}`}>
          {currentImage && (
            <img
              src={currentImage}
              alt="content image"
              style={imageStyle}
              className={fade ? 'img-slideshow fade-out' : 'img-slideshow fade-in'}
            />
          )}
        </div>
      </div>

      <div className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        <div
          className="navbar-content-11"
          style={{ transform: translateX.current, transition: 'transform 0.3s ease' }}
        >
          {sectionsTitles.map((title, index) => (
            <span
              key={index}
              className={`nav-item-11 ${activeSection === index + 1 ? 'highlighted' : ''}`}
              onClick={() => handleNavClick(index)}
            >
              {title}
            </span>
          ))}
        </div>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}