import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import './HomeMembers.scss';

export default function HomeMembers() {

  const [isFixed, setIsFixed] = useState(false);
  const homeGithubRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeGithubRef.current) return;

      const rect = homeGithubRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const topVisible = rect.top <= windowHeight * 0.8 && rect.bottom > windowHeight * 0.01;

      setIsFixed(topVisible);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={homeGithubRef} className='home-members'>
      <div className={`content ${isFixed ? 'fixed' : ''}`}>
        <p className='title'>Thành viên nhóm 9</p>
        <div>
          <div className='node'>
            <div className='circle'>

            </div>
            <p className='name'>Lâm Quốc Vinh</p>
            <div className='line'></div>
            <p className='role'>Nhóm trưởng</p>
          </div>
        </div>
        <div className='group'>
          <div className='node'>
            <div className='circle'>

            </div>
            <p className='name'>Từ Thiên Bảo</p>
            <div className='line'></div>
            <p className='role'>Thiết kế sản phẩm</p>
          </div>
          <div className='node'>
            <div className='circle'>

            </div>
            <p className='name'>Nguyễn Ngọc Tường Vy</p>
            <div className='line'></div>
            <p className='role'>Thuyết trình</p>
          </div>
          <div className='node'>
            <div className='circle'>

            </div>
            <p className='name'>Thân Thành Tâm</p>
            <div className='line'></div>
            <p className='role'>Biên soạn nội dung</p>
          </div>
        </div>
      </div>

    </div>
  );
}
