import React from 'react';
import './Content23.scss';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import { Typography } from '@mui/material';

export default function Content23() {
  return (
    <div className="content-23">
      <p className='line'>Trong thực tiễn, Hồ Chí Minh đã tranh thủ sự ủng hộ quốc tế cho cách mạng Việt Nam:</p>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className='year'>1946-1954</Typography>
            <Typography variant="body1" className='content'>
              Việt Nam nhận được sự hỗ trợ từ Trung Quốc và Liên Xô về vũ khí, lương thực và đào tạo quân sự.
              Ví dụ, Trung Quốc đã giúp Việt Nam lập căn cứ địa chiến lược tại biên giới năm 1950.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className='year'>1955-1975</Typography>
            <Typography variant="body1" className='content'>
              Phong trào phản chiến tại Mỹ và châu Âu đã tạo sức ép quốc tế, góp phần làm suy yếu ý chí xâm lược của chính phủ Mỹ.
              Năm 1968, hàng triệu người tại Mỹ biểu tình đòi chấm dứt chiến tranh Việt Nam.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
