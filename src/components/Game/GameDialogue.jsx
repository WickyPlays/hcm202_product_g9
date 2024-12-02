import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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

export default function GameDialogue({ open, setOpen = () => {} }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Theo Hồ Chí Minh, mục tiêu cao nhất của đoàn kết quốc tế là gì?',
      options: [
        { key: 'A', text: 'Thống nhất chính trị toàn cầu' },
        { key: 'B', text: 'Hòa bình và tự do cho các dân tộc' },
        { key: 'C', text: 'Tăng cường sức mạnh kinh tế' },
        { key: 'D', text: 'Tạo ra các liên minh quân sự mạnh mẽ' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 2,
      question: 'Yếu tố nào được Hồ Chí Minh xem là nền tảng của đoàn kết quốc tế?',
      options: [
        { key: 'A', text: 'Sự thống trị của các quốc gia lớn' },
        { key: 'B', text: 'Tôn trọng độc lập và chủ quyền' },
        { key: 'C', text: 'Phụ thuộc lẫn nhau về kinh tế' },
        { key: 'D', text: 'Cạnh tranh quyền lực toàn cầu' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 3,
      question: 'Hồ Chí Minh nhấn mạnh điều gì là cần thiết để duy trì đoàn kết quốc tế?',
      options: [
        { key: 'A', text: 'Tăng cường sức mạnh quân sự' },
        { key: 'B', text: 'Sự chân thành và lòng tin' },
        { key: 'C', text: 'Lợi ích kinh tế chung' },
        { key: 'D', text: 'Kiểm soát lẫn nhau' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 4,
      question: 'Hồ Chí Minh cho rằng vai trò của các nước nhỏ trong đoàn kết quốc tế là gì?',
      options: [
        { key: 'A', text: 'Phụ thuộc vào các nước lớn' },
        { key: 'B', text: 'Đóng góp vào sự nghiệp chung' },
        { key: 'C', text: 'Trung lập và không tham gia' },
        { key: 'D', text: 'Chỉ nhận viện trợ từ các nước phát triển' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 5,
      question: 'Trong tư tưởng Hồ Chí Minh, đoàn kết quốc tế cần hướng đến điều gì?',
      options: [
        { key: 'A', text: 'Lợi ích riêng của từng quốc gia' },
        { key: 'B', text: 'Giải phóng dân tộc và quyền bình đẳng' },
        { key: 'C', text: 'Sự cạnh tranh về tài nguyên' },
        { key: 'D', text: 'Thống trị các nước yếu hơn' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 6,
      question: 'Hồ Chí Minh xem đoàn kết quốc tế là công cụ để đạt được điều gì?',
      options: [
        { key: 'A', text: 'Sự phát triển kinh tế nhanh chóng' },
        { key: 'B', text: 'Hòa bình lâu dài và quyền tự quyết' },
        { key: 'C', text: 'Tăng cường sức mạnh chính trị' },
        { key: 'D', text: 'Cạnh tranh ảnh hưởng trong khu vực' },
      ],
      correctAnswer: 'B',
    },
    {
      id: 7,
      question: 'Tư tưởng đoàn kết quốc tế của Hồ Chí Minh đặt trọng tâm vào yếu tố nào?',
      options: [
        { key: 'A', text: 'Cùng hợp tác vì lợi ích chung' },
        { key: 'B', text: 'Áp đặt hệ tư tưởng' },
        { key: 'C', text: 'Thống trị các dân tộc yếu hơn' },
        { key: 'D', text: 'Cạnh tranh về tài chính' },
      ],
      correctAnswer: 'A',
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
    setShowResults(true);

    const dialogElement = ReactDOM.findDOMNode(document.querySelector('.MuiPaper-root'));
    if (dialogElement) {
      dialogElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setElapsedTime(0);
    setScore(null);
    setAnswers({});
    setShowResults(false);
  };

  const handleClose = () => {
    setOpen(false);
    handleReset();
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const allAnswered = Object.keys(answers).length === questions.length;

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
          <div className="timer">
            <p>Time Elapsed: <strong>{formatTime(elapsedTime)}</strong></p>
            <p>No. of questions: <strong>{questions.length}</strong></p>
          </div>

          <div>
            {score !== null && (
              <div className="score">
                <p>Your Score: {score}/{questions.length}</p>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleReset}
                  className="btn-reset"
                >
                  Reset progress
                </Button>
              </div>
            )}
          </div>

          <div className="question-container">
            {questions.map((q) => (
              <div key={q.id} className="question-block">
                <p>
                  <span className="question-number">{q.id}</span> {q.question}
                </p>
                <div className="answer-block">
                  <RadioGroup
                    value={answers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    disabled={showResults}
                  >
                    {q.options.map((option) => (
                      <FormControlLabel
                        key={option.key}
                        value={option.key}
                        control={<Radio />}
                        label={
                          <span>
                            {option.text}{' '}
                            {showResults && (
                              <>
                                {q.correctAnswer === option.key ? (
                                  <span className="mark correct-mark">✔</span>
                                ) : answers[q.id] === option.key ? (
                                  <span className="mark incorrect-mark">✘</span>
                                ) : null}
                              </>
                            )}
                          </span>
                        }
                      />
                    ))}
                  </RadioGroup>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="contained"
            color="primary"
            disabled={!allAnswered || showResults}
            onClick={handleSubmit}
            className="btn-submit"
          >
            Kiểm tra kết quả
          </Button>
        </div>
      </Dialog>
    </div>
  );
}