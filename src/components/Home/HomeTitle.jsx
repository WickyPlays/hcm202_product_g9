import React, { useState, useEffect, useRef } from 'react';
import './HomeTitle.scss';

export default function HomeTitle() {
  const [isFixed, setIsFixed] = useState(false);
  const homeTitleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeTitleRef.current) return;

      const rect = homeTitleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const topVisible = rect.top <= windowHeight * 0.5 && rect.bottom > windowHeight * 0.55;

      setIsFixed(topVisible);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={homeTitleRef} className="home-title">
      <div className={`content ${isFixed ? 'fixed' : ''}`}>
        <p className="title">HCM202 - Group 9</p>
        <p className="subtitle">presents</p>
        <h1>Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế</h1>
        <p className="lecturer">Lecturer: Nguyễn Anh Khoa</p>
        <p className="footer">Trang này là sản phẩm cho môn học HCM202 của FPT University</p>
      </div>
    </div>
  );
}
