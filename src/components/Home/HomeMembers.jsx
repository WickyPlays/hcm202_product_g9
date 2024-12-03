import React, { useState, useEffect, useRef } from 'react';
import { Crown, DesignServices, Mic, MenuBook } from '@mui/icons-material';
import './HomeMembers.scss';

export default function HomeMembers() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isFixed, setIsFixed] = useState(false);
  const homeGithubRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!homeGithubRef.current) return;

      const rect = homeGithubRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const topVisible = rect.top <= windowHeight * 0.8 && rect.bottom > windowHeight * 0.01;

      setIsFixed(topVisible);
    };

    // Initial checks
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderIcon = (role) => {
    switch (role) {
      case 'Nhóm trưởng':
        return <Crown fontSize="large" />;
      case 'Thiết kế sản phẩm':
        return <DesignServices fontSize="large" />;
      case 'Thuyết trình':
        return <Mic fontSize="large" />;
      case 'Biên soạn nội dung':
        return <MenuBook fontSize="large" />;
      default:
        return null;
    }
  };

  const members = [
    { name: 'Lâm Quốc Vinh', role: 'Nhóm trưởng' },
    { name: 'Từ Thiên Bảo', role: 'Thiết kế sản phẩm' },
    { name: 'Nguyễn Ngọc Tường Vy', role: 'Thuyết trình' },
    { name: 'Thân Thành Tâm', role: 'Biên soạn nội dung' },
  ];

  return (
    <div ref={homeGithubRef} className="home-members">
      <div className={`content ${isFixed ? 'fixed' : ''}`}>
        <p className="title">Thành viên nhóm 9</p>
        {/* Desktop content */}
        <div className="content-pc" style={{ display: isMobile ? 'none' : 'block' }}>
          <div>
            {members.map((member, index) => (
              <div key={index} className="node">
                <div className="circle">{renderIcon(member.role)}</div>
                <p className="name">{member.name}</p>
                <div className="line"></div>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile content */}
        <div className="content-mobile" style={{ display: isMobile ? 'block' : 'none' }}>
          {members.map((member, index) => (
            <div key={index} className="node">
              <div className="circle">{renderIcon(member.role)}</div>
              <div className="info">
                <p className="name">{member.name}</p>
                <p className="role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
