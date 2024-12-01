import React, { useState } from "react";
import './Content51.scss';
import { Button } from "@mui/material";

export default function Content51() {

  return (
    <div className="content-51">
      <p className='title'><span className='node'>5</span> Minigames!</p>
      <h1>Nếu bạn có thời gian, hãy tham gia kiểm tra kiến thức của bạn nhé!</h1>
      <div className="content">
        <Button variant="contained" className="btn-start">Tham gia ngay</Button>
      </div>
    </div>
  );
}
