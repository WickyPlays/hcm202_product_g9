import React, { useState, useEffect } from 'react';
import './HomeTitle.scss';

export default function HomeTitle() {

  return (
    <div className={`home-title`}>
      <div className='content'>
        <p className='title'>HCM202 - Group 9</p>
        <p className='subtitle'>presents</p>
        <h1>Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế</h1>
      </div>

    </div>
  );
}

