import React, { useContext, useState, useEffect } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import { Link } from "react-router-dom";
import Question10Pic from "../../assets/pics/Question10Pic.png";
import ProgressBar10 from "../../assets/pics/ProgressBar10.png";
import icon1 from "../../assets/pics/icon1.png";
import icon2 from "../../assets/pics/icon2.png";
import icon3 from "../../assets/pics/icon3.png";
import icon4 from "../../assets/pics/icon4.png";

function Question10() {
  const [answer, setAnswer] = useState("pick1");
  const [end, setEnd] = useState("0");
  const {
    finaleResult1,
    setFinaleResult1,
    finaleResult2,
    setFinaleResult2,
    finaleResult3,
    setFinaleResult3,
    finaleResult4,
    setFinaleResult4,
  } = useContext(ResultContext);

  useEffect(() => {
    if (
      Math.max(finaleResult1, finaleResult2, finaleResult3, finaleResult4) ===
      finaleResult1
    ) {
      setEnd("/Result1");
    } else if (
      Math.max(finaleResult1, finaleResult2, finaleResult3, finaleResult4) ===
      finaleResult2
    ) {
      setEnd("/Result2");
    } else if (
      Math.max(finaleResult1, finaleResult2, finaleResult3, finaleResult4) ===
      finaleResult3
    ) {
      setEnd("/Result3");
    } else if (
      Math.max(finaleResult1, finaleResult2, finaleResult3, finaleResult4) ===
      finaleResult4
    ) {
      setEnd("/Result4");
    }
  }, [finaleResult1, finaleResult2, finaleResult3, finaleResult4]);

  function handdleAnswer(event) {
    setAnswer(event.target.value);
  }

  function handdleResult() {
    console.log("OWO");
    if (answer === "pick1") {
      setFinaleResult1(finaleResult1 + 1);
    } else if (answer === "pick2") {
      setFinaleResult2(finaleResult2 + 1);
    } else if (answer === "pick3") {
      setFinaleResult3(finaleResult3 + 1);
    } else if (answer === "pick4") {
      setFinaleResult4(finaleResult4 + 1);
    }
  }

  return (
    <div className="wrap  question10">
      <div className="answer">
        <div className="top">
          <div className="questionPic">
            <img src={Question10Pic} alt="第一題的圖片" />
          </div>
        </div>
        <div className="container">
          <div className="headline">
            <img
              className="ProgressBar"
              src={ProgressBar10}
              alt="ProgressBar10"
            />
            <h1>
              流浪商人和神奇駱駝完成了他們的任務，成功把你帶回到地面，你回到地面會做的第一件事是...
            </h1>
          </div>

          <div className="answerArea">
            <div className="options">
              <input
                type="radio"
                value={"pick1"}
                checked={answer === "pick1"}
                onChange={handdleAnswer}
                id="option1"
              />
              <label for="option1">
                <div>
                  <img src={icon1} alt="icon" />
                </div>
                <p>舉辦轟趴放煙火慶祝</p>
              </label>
            </div>

            <div className="options">
              <input
                type="radio"
                value={"pick3"}
                checked={answer === "pick3"}
                onChange={handdleAnswer}
                id="option3"
              />
              <label for="option3">
                <div>
                  <img src={icon2} alt="icon" />
                </div>
                <p>把剛剛的故事寫成小說</p>
              </label>
            </div>

            <div className="options">
              <input
                type="radio"
                value={"pick2"}
                checked={answer === "pick2"}
                onChange={handdleAnswer}
                id="option2"
              />
              <label for="option2">
                <div>
                  <img src={icon3} alt="icon" />
                </div>
                <p>當然是回到家裡睡個好覺</p>
              </label>
            </div>

            <div className="options">
              <input
                type="radio"
                value={"pick4"}
                checked={answer === "pick4"}
                onChange={handdleAnswer}
                id="option4"
              />

              <label for="option4">
                <div>
                  <img src={icon4} alt="icon" />
                </div>
                <p>開始發抖覺得噁心想吐</p>
              </label>
            </div>
          </div>

          <div className="btnArea">
            <Link to={end}>
              <button className="nextBtn" onClick={handdleResult}>
                NEXT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question10;
