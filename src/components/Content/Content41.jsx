import React, { useState } from "react";
import axios from "axios";
import './Content41.scss';
import { Button } from "@mui/material";
import Markdown from 'react-markdown';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import InfoIcon from '@mui/icons-material/Info';
import audio from '../../assets/ai_music.mp3';
import ContentAudio from "./ContentAudio";

export default function Content41() {
  const prompts = [
    "Tạo bài thơ vần hay liên quan đến chủ đề.",
    "Nêu một ví dụ thực tiễn về đoàn kết toàn dân tộc ở Việt Nam.",
    "Giải thích khái niệm 'tự do' trong tư tưởng Hồ Chí Minh bằng ví dụ thực tế.",
    "Kể một câu chuyện lịch sử Việt Nam thể hiện tinh thần đoàn kết.",
    "Phân tích vai trò của thế hệ trẻ trong việc phát huy tinh thần đoàn kết quốc tế.",
    "Lời bài hát về tư tưởng Hồ Chí Minh về đoàn kết quốc tế.",
  ];


  const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);
  const [resultText, setResultText] = useState("Câu trả lời sẽ hiện ở đây.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePrompt = async () => {
    setLoading(true);
    setResultText("Loading answer...");
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GEMINI_URL}`,
        {
          text: selectedPrompt + " - Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
        }
      );

      const text = response?.data?.message || "No response received";
      setResultText(text);
    } catch (err) {
      setError("Error generating content. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-41">
      <div className="content-ai">
        <p className='title'><span className='node'>4</span> Tương tác AI</p>
        <h1>Hãy cùng thử AI về chủ đề nhé!</h1>
        <div className="content">
          <div className='content-input'>
            <div className="prompt-list">
              {prompts.map((prompt, index) => (
                <div
                  key={index}
                  className={`prompt-item ${selectedPrompt === prompt ? 'selected' : ''}`}
                  onClick={() => setSelectedPrompt(prompt)}
                >
                  <Brightness5Icon />
                  <p>{prompt}</p>
                </div>
              ))}
            </div>
            <Button
              variant="contained"
              className="btn-generate-prompt"
              onClick={generatePrompt}
              disabled={loading}
            >
              {loading ? "Đang phân tích..." : "Xác nhận"}
            </Button>
            {error && <p style={{ color: "#ffffff" }}>{error}</p>}
          </div>
          <div className='content-result'>
            <div className='result'>
              {resultText && (
                <Markdown>{resultText}</Markdown>
              )}
            </div>
            <div className='note'>
              <InfoIcon className='info-icon' />
              <div>
                <p>Cảnh báo: Nội dung do AI tạo ra có thể không chính xác.</p>
                <p>Vui lòng kiểm tra trước khi sử dụng nội dung.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="audio-player">
        <div className="audio-container">
          <p className='title'>Lắng nghe âm nhạc</p>
          {/* <audio controls src={audio} type="audio/mp3" className="audio-player" /> */}
          <ContentAudio audio={audio} />
        </div>
      </div>

    </div>
  );
}
