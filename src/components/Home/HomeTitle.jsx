import React, { useState, useEffect } from 'react';
import './HomeTitle.scss';

export default function HomeTitle() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setIsFixed(scrollPercent < 15);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`home-title`}>
      <div className={`content ${isFixed ? 'fixed' : ''}`}>
        <p className='title'>HCM202 - Group 9</p>
        <p className='subtitle'>presents</p>
        <h1>Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế</h1>
        <p className='lecturer'>Lecturer: Nguyễn Anh Khoa</p>
        <p className='footer'>Trang này là sản phẩm cho môn học HCM202 của FPT University</p>
      </div>
    </div>
  );
}
