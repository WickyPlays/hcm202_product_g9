import React, { useState } from 'react';
import './Content24.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';  // Import MUI icon
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Content24() {
  const [openSections, setOpenSections] = useState({});  // State to track open sections

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],  // Toggle the section's open state
    }));
  };

  const sections = [
    {
      title: "Phong trào cộng sản và công nhân quốc tế",
      content: "Đây là lực lượng chủ chốt trong việc chống lại các thế lực phản động và xây dựng nền tảng cách mạng toàn cầu. Hồ Chí Minh đã xây dựng mối quan hệ mật thiết với các đảng cộng sản và các tổ chức cách mạng quốc tế, đặc biệt là trong khối các nước xã hội chủ nghĩa."
    },
    {
      title: "Phong trào đấu tranh giải phóng dân tộc",
      content: "Các dân tộc bị áp bức trên thế giới cần đoàn kết để giành quyền tự do, độc lập. Hồ Chí Minh luôn ủng hộ các phong trào giải phóng dân tộc ở các nước thuộc địa, khẳng định rằng chiến thắng của một dân tộc là thắng lợi chung của tất cả các dân tộc bị áp bức."
    },
    {
      title: "Lực lượng tiến bộ trên thế giới",
      content: "Hồ Chí Minh không chỉ tìm kiếm sự đoàn kết từ các lực lượng cách mạng mà còn từ các quốc gia yêu chuộng hòa bình và công lý. Phong trào phản chiến tại Mỹ và các nước phương Tây đã góp phần quan trọng trong việc tạo sức ép lên chính phủ Mỹ trong chiến tranh Việt Nam."
    }
  ];

  return (
    <div className="content-24">
      <div className="content">
        <p className="tag">2.2. Lực lượng đoàn kết quốc tế và hình thức tổ chức</p>

        <div className="section-list">
          {sections.map((section, index) => (
            <div key={index} className={`section ${openSections[index] ? 'active' : ''}`}>
              <div className="section-header" onClick={() => toggleSection(index)}>
                <h3>{section.title}</h3>
                {openSections[index] ? (
                  <ExpandLessIcon className="icon" />  // Arrow pointing up
                ) : (
                  <ExpandMoreIcon className="icon" />  // Arrow pointing down
                )}
              </div>
              <div className="section-content">
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
