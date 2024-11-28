import React, { useState, useEffect, useRef } from 'react';
import './HomeGithub.scss';
import circle from '../../assets/circle.png';

export default function HomeGithub() {
  const [isFixed, setIsFixed] = useState(false);
  const homeGithubRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeGithubRef.current) return;

      const rect = homeGithubRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const topVisible = rect.top <= windowHeight * 0.5 && rect.bottom > windowHeight * 0.8;

      setIsFixed(topVisible);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={homeGithubRef} className="home-github">
      <div className={`content ${isFixed ? 'fixed' : ''}`}>
      <div className='circle' style={{backgroundImage: 'url(' + circle + ')'}}></div>

        <div className="content-link">
          <p className="subtitle">Tham gia link tại</p>
          <a
            className="title"
            target='blank'
            href="https://wickyplays.github.io/hcm202_product_g9"
          >
            https://wickyplays.github.io/hcm202_product_g9
          </a>
        </div>
        <div className="content-link github">
          <p className="subtitle">Mã nguồn code</p>
          <a
            className="title"
            target='blank'
            href="https://github.com/WickyPlays/hcm202_product_g9"
          >
            https://github.com/WickyPlays/hcm202_product_g9
          </a>
        </div>
      </div>
    </div>
  );
}
