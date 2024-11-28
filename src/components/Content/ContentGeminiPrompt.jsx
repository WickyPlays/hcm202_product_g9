import React, { useState } from "react";
import axios from "axios";

const ContentGeminiPrompt = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePrompt = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_TOKEN}`,
        {
          contents: [
            {
              parts: [
                {
                  text: inputText || "Lyrics for happy birthday song",
                },
              ],
            },
          ],
        }
      );
      const text =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received";
      setResultText(text);
    } catch (err) {
      setError("Error generating content. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1>Content Gemini Prompt</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your prompt here (e.g., Lyrics for happy birthday song)"
        rows="5"
        cols="50"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "500px",
        }}
      />
      <button
        onClick={generatePrompt}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {loading ? "Generating..." : "Generate Prompt"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {resultText && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#fff",
            maxWidth: "500px",
            whiteSpace: "pre-wrap",
          }}
        >
          <h3>Generated Content:</h3>
          <p>{resultText}</p>
        </div>
      )}
    </div>
  );
};

export default ContentGeminiPrompt;
