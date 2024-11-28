import { useEffect, useState, useRef } from "react";
import './Content25.scss';

export default function Content25() {
  const [activeSection, setActiveSection] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  const translateX = useRef('translateX(0)');
  const sectionsTitles = [
    "Thống nhất mục tiêu và lợi ích",
    "Độc lập, tự chủ",
    "Có lý, có tình",
  ];

  const sectionsContent = [
    "Đoàn kết quốc tế phải gắn với mục tiêu chung là độc lập dân tộc và chủ nghĩa xã hội. Hồ Chí Minh khẳng định rằng “Giải phóng dân tộc là một bộ phận của cách mạng thế giới.”",
    "Đoàn kết quốc tế không phải là sự phụ thuộc, mà là sự hợp tác trên nền tảng tự lực, tự cường. Hồ Chí Minh nhấn mạnh rằng Việt Nam dù nhận sự hỗ trợ quốc tế nhưng phải đứng vững trên đôi chân của mình.",
    "Đoàn kết phải dựa trên sự bình đẳng, tôn trọng lẫn nhau và vì mục tiêu hòa bình chung. Hồ Chí Minh luôn thực hiện ngoại giao với tinh thần khéo léo và nhân văn, thể hiện qua việc tranh thủ sự ủng hộ của các quốc gia tiến bộ trên thế giới.",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-content-25');
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
      const navbarContent = document.querySelector('.navbar-content-25');
      const highlightedItem = document.querySelector('.nav-item-25.highlighted');

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
    const sections = document.querySelectorAll('.section-content-25');
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="content-25">
      <p className="tag">2.3. Nguyên tắc đoàn kết quốc tế</p>
      <div className="content">
        <div>
          {sectionsTitles.map((title, index) => (
            <div
              key={index}
              className={`section-content-25 ${activeSection === index + 1 ? 'active' : ''}`}
            >
              <h2>{index + 1}. {title}</h2>
              <p>{sectionsContent[index]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        <div className="navbar-content-25"
          style={{
            transform: translateX.current,
            transition: 'transform 0.3s ease',
          }}
        >
          {sectionsTitles.map((title, index) => (
            <span
              key={index}
              className={`nav-item-25 ${activeSection === index + 1 ? 'highlighted' : ''}`}
              onClick={() => handleNavClick(index)}
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