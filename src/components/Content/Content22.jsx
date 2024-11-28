import React, { useState, useEffect, useRef } from 'react';
import './Content22.scss';
import circle from '../../assets/circle.png';

export default function Content22() {
  const [isFixed, setIsFixed] = useState(false);
  const content22Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!content22Ref.current) return;

      const rect = content22Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const topVisible = rect.top <= windowHeight * 0.4 && rect.bottom > windowHeight * 0.5;

      setIsFixed(topVisible);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={content22Ref} className="content-22">
      <div className={`content ${isFixed ? 'fixed' : ''}`}>
        <div className='circle' style={{ backgroundImage: 'url(' + circle + ')' }}></div>
        <div className='quote'>
          <p className='quote-title'>Hồ Chí Minh từng nói:</p>
          <p className='quote-content'>“Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác ngoài con đường cách mạng vô sản.”</p>
        </div>
      </div>
    </div>
  );
}
