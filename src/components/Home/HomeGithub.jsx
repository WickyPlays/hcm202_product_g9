import React, { useState, useEffect } from 'react';
import './HomeGithub.scss';

export default function HomeGithub() {

  return (
    <div className={`home-github`}>
      <div className='content'>
        <div>
          <p className='subtitle'>Tham gia link tại</p>
          <a className='title' href='https://wickyplays.github.io/hcm202_product_g9'>https://wickyplays.github.io/hcm202_product_g9</a>
        </div>
        <div className='github'>
          <p className='subtitle'>Mã nguồn code</p>
          <a className='title' href='https://github.com/WickyPlays/hcm202_product_g9'>https://github.com/WickyPlays/hcm202_product_g9</a>
        </div>

      </div>

    </div>
  );
}

