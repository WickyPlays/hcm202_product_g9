import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import './HomeMembers.scss';

const timelineData = [
  { member: 'Member 1', profession: 'Engineer' },
  { member: 'Member 2', profession: 'Designer' },
  { member: 'Member 3', profession: 'Developer' },
  { member: 'Member 4', profession: 'Manager' },
];

export default function HomeMembers() {
  return (
    <div className='home-members'>
      <div className='contents'>
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
