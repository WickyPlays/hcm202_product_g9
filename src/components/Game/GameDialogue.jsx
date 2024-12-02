import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import './GameDialogue.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GameDialogue({ open, setOpen = () => { } }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is the key theme of Hồ Chí Minh\'s international solidarity?',
      options: [
        { key: 'A', text: 'Unity in diversity' },
        { key: 'B', text: 'Economic cooperation only' },
        { key: 'C', text: 'Political alliances only' },
        { key: 'D', text: 'Self-sufficiency' },
      ],
      correctAnswer: 'A',
    },
    {
      id: 2,
      question: 'Which value did Hồ Chí Minh emphasize in unity?',
      options: [
        { key: 'A', text: 'Individualism' },
        { key: 'B', text: 'Mutual respect' },
        { key: 'C', text: 'Cultural superiority' },
        { key: 'D', text: 'Military strength' },
      ],
      correctAnswer: 'B',
    },
  ];

  useEffect(() => {
    let timer;
    if (open) {
      setElapsedTime(0);
      timer = setInterval(() => setElapsedTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [open]);

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  const handleClose = () => {
    setOpen(false);
    setScore(null);
    setAnswers({});
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="game-dialog">
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="fullscreen-dialog-game"
      >
        <div className="title">
          <p>Minigame: Tư tưởng Hồ Chí Minh về Đoàn kết Quốc tế</p>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className="btn-close"
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className="dialog-content">
          <div className="timer">Time Elapsed: {formatTime(elapsedTime)}</div>
          <div className='question-container'>
            {questions.map((q) => (
              <div key={q.id} className="question-block">
                <p>{q.question}</p>
                <RadioGroup
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                >
                  {q.options.map((option) => (
                    <FormControlLabel
                      key={option.key}
                      value={option.key}
                      control={<Radio />}
                      label={option.text}
                    />
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>

          <Button
            variant="contained"
            color="primary"
            disabled={!allAnswered}
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit
          </Button>
          {score !== null && <div className="score">Your Score: {score}/{questions.length}</div>}
        </div>
      </Dialog>
    </div>
  );
}
