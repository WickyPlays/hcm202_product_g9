import React, { useState, useEffect, useRef } from 'react';
import './HomeGithub.scss';
import circle from '../../assets/circle.png';

export default function HomeGithub() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const homeGithubRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!homeGithubRef.current) return;

      const rect = homeGithubRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const topVisible = rect.top <= windowHeight * 0.5 && rect.bottom > windowHeight * 0.8;

      setIsFixed(topVisible);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initialize on mount
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={homeGithubRef} className="home-github">
      <div className={`content ${isFixed ? 'fixed' : ''}`}>
        <div className="circle" style={{ backgroundImage: `url(${circle})` }}></div>

        <div className="content-link">
          <p className="subtitle">Tham gia link tại</p>
          {!isMobile && (
            <a
              className="title"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wickyplays.github.io/hcm202_product_g9"
            >
              https://wickyplays.github.io/hcm202_product_g9
            </a>
          )}
          {isMobile && (
            <a
              className="title-mobile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wickyplays.github.io/hcm202_product_g9"
            >
              Webpage link
            </a>
          )}
        </div>
        <div className="content-link github">
          <p className="subtitle">Mã nguồn code</p>
          {!isMobile && (
            <a
              className="title"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/WickyPlays/hcm202_product_g9"
            >
              https://github.com/WickyPlays/hcm202_product_g9
            </a>
          )}
          {isMobile && (
            <a
              className="title-mobile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/WickyPlays/hcm202_product_g9"
            >
              Github link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
