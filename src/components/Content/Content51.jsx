import React, { useState } from "react";
import './Content51.scss';
import { Button } from "@mui/material";
import GameDialogue from "../Game/GameDialogue";

export default function Content51() {

  const [open, setOpen] = useState(false);

  return (
    <div className="content-51">
      <p className='title'><span className='node'>5</span> Minigames!</p>
      <h1>Nếu bạn có thời gian, hãy tham gia kiểm tra kiến thức của bạn nhé!</h1>
      <div className="content">
        <Button variant="contained" className="btn-start" onClick={() => setOpen(true)}>Tham gia ngay</Button>
      </div>

      <GameDialogue open={open} setOpen={setOpen} />
    </div>
  );
}
