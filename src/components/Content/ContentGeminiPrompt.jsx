import React, { useState } from "react";
import axios from "axios";
import './ContentGeminiPrompt.scss';
import { Button } from "@mui/material";
import Markdown from 'react-markdown';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export default function ContentGeminiPrompt() {
  const prompts = [
    "Tạo bài thơ vần hay liên quan đến chủ đề.",
    "Nêu một ví dụ thực tiễn về đoàn kết toàn dân tộc ở Việt Nam.",
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
    <div className="content-gemini-prompt">
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
            {loading ? "Generating..." : "Generate Prompt"}
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className='result'>
          {resultText && (
            <Markdown>{resultText}</Markdown>
          )}
        </div>
      </div>
    </div>
  );
}
