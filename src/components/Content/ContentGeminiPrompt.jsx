import React, { useState } from "react";
import axios from "axios";
import './ContentGeminiPrompt.scss';
import { Button } from "@mui/material";

export default function ContentGeminiPrompt() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePrompt = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://simple-gemini-express.onrender.com/api/generate-prompt",
        {
          text: inputText || "Lyrics for happy birthday song",
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
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your prompt here (e.g., Lyrics for happy birthday song)"
        rows="5"
        cols="50"
      />
      <Button
        variant="contained"
        className="btn-generate-prompt"
        onClick={generatePrompt}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Prompt"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {resultText && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxWidth: "500px",
            whiteSpace: "pre-wrap",
          }}
        >
          <h3>Kết quả:</h3>
          <p>{resultText}</p>
        </div>
      )}
    </div>
  );
}
