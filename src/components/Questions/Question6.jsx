import React, { useContext, useState } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import { Link } from "react-router-dom";
import Question6Pic from "../../assets/pics/Question6Pic.png";
import ProgressBar6 from "../../assets/pics/ProgressBar6.png";
import icon1 from "../../assets/pics/icon1.png";
import icon2 from "../../assets/pics/icon2.png";
import icon3 from "../../assets/pics/icon3.png";
import icon4 from "../../assets/pics/icon4.png";

function Question6() {
  const [answer, setAnswer] = useState("pick4");

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

  function handdleAnswer(event) {
    setAnswer(event.target.value);
  }

  function handdleResult() {
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
    <div className="wrap question6">
      <div className="answer">
        <div className="top">
          <div className="questionPic">
            <img src={Question6Pic} alt="第一題的圖片" />
          </div>
        </div>
        <div className="container">
          <div className="headline">
            <img
              className="ProgressBar"
              src={ProgressBar6}
              alt="ProgressBar6"
            />
            <h1>好不容易脫離了險境，肚子有點餓了，你會希望這時候口袋裡有...</h1>
          </div>

          <div className="answerArea">
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
                  <img src={icon1} alt="icon" />
                </div>
                <p>有黃金可以去買點吃的</p>
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
                <p>來塊蛋糕慰勞自己吧</p>
              </label>
            </div>

            <div className="options">
              <input
                type="radio"
                value={"pick1"}
                checked={answer === "pick1"}
                onChange={handdleAnswer}
                id="option1"
              />
              <label for="option3">
                <div>
                  <img src={icon3} alt="icon" />
                </div>
                <p>能夠離開這裡的車票</p>
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
                  <img src={icon4} alt="icon" />
                </div>
                <p>可以呼叫同伴的鈴鐺</p>
              </label>
            </div>
          </div>

          <div className="btnArea">
            <Link to={"/Question7"}>
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

export default Question6;
