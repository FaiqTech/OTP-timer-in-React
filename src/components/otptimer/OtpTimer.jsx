import React, { useState, useEffect } from "react";
import "./OtpTimer.css";

const OtpTimer = ({ deqiqe, saniye }) => {
  const [second, setSecond] = useState(saniye);
  const [minute, setMinute] = useState(deqiqe);
  // Taymerin işlək olub-olmadığını yoxlamaq üçün vəziyyəti müəyyən edirik
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (second === 0 && minute === 0) {
        clearInterval(interval);
        setIsTimerRunning(false);
      } else {
        setSecond((second) => (second === 0 ? 59 : second - 1));
        setMinute((minute) =>
          second === 0 ? (minute > 0 ? minute - 1 : 0) : minute
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [second, minute]);

  const formattedSecond = second < 10 ? `0${second}` : `${second}`;
  const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

  const handleRestart = () => {
    setSecond(saniye);
    setMinute(deqiqe);
    setIsTimerRunning(true);
  };

  return (
    <div className="timer-container">
      <h1 className="timer">
        Zaman: {formattedMinute} : {formattedSecond}
      </h1>
      {!isTimerRunning && (
        <button className="button" onClick={handleRestart}>
          Yeniden Başla
        </button>
      )}
    </div>
  );
};

export default OtpTimer;
