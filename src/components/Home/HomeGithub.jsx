import React, { useState, useEffect } from 'react';
import './HomeGithub.scss';

export default function HomeGithub() {

  return (
    <div className={`home-github`}>
      <div className='content'>
        <div>
          <p className='subtitle'>Join our link at</p>
          <p className='title'>https://wickyplays.github.io/hcm202_product_g9</p>
        </div>
        <div className='github'>
          <p className='subtitle'>Source code</p>
          <p className='title'>https://github.com/WickyPlays/hcm202_product_g9</p>
        </div>

      </div>

    </div>
  );
}

