import React, { useState, useRef, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';
import './ContentAudio.scss';
import { Button } from '@mui/material';

export default function ContentAudio({ audio }) {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const resetAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const setAudioDuration = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('timeupdate', updateTime);
    audioElement.addEventListener('loadedmetadata', setAudioDuration);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
      audioElement.removeEventListener('loadedmetadata', setAudioDuration);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleProgressBarClick = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="content-audio">
      <div className="audio-container">
        <div className="custom-audio-player">
          <audio ref={audioRef} src={audio} type="audio/mp3" />
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div
            className="progress-bar"
            ref={progressBarRef}
            onClick={handleProgressBarClick}
          >
            <div
              className="progress"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="controls">
            <Button className="control-button" onClick={togglePlayPause}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </Button>
            <Button className="control-button" onClick={resetAudio}>
              <ReplayIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
