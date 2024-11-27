import React, { useState, useEffect } from 'react';
import './HomeGithub.scss';

export default function HomeGithub() {

  return (
    <div className={`home-github`}>
      <div className='content'>
        <div>
          <p className='subtitle'>Join our link at</p>
          <p className='title'>https://hcm202-product-g9.github.io</p>
        </div>
        <div className='github'>
          <p className='subtitle'>Source code</p>
          <p className='title'>https://github.com/WickyPlays/hcm202-product-g9</p>
        </div>

      </div>

    </div>
  );
}

