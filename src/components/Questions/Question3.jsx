import React, { useContext, useState } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import { Link } from "react-router-dom";
import Question3Pic from "../../assets/pics/Question3Pic.png";
import ProgressBar3 from "../../assets/pics/ProgressBar3.png";
import icon1 from "../../assets/pics/icon1.png";
import icon2 from "../../assets/pics/icon2.png";
import icon3 from "../../assets/pics/icon3.png";
import icon4 from "../../assets/pics/icon4.png";

function Question3() {
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
    <div className="wrap question3">
      <div className="answer">
        <div className="top">
          <div className="questionPic">
            <img src={Question3Pic} alt="第一題的圖片" />
          </div>
        </div>
        <div className="container">
          <div className="headline">
            <img
              className="ProgressBar"
              src={ProgressBar3}
              alt="ProgressBar3"
            />
            <h1>好不容易穿越了高牆，卻失足墜落山谷，你最怕...</h1>
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
                <p>穿越到異世界</p>
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
                  <img src={icon2} alt="icon" />
                </div>
                <p>充滿殭屍的恐怖礦坑</p>
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
              <label for="option1">
                <div>
                  <img src={icon3} alt="icon" />
                </div>
                <p>充滿人類的社交場合</p>
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
                  <img src={icon4} alt="icon" />
                </div>
                <p>地上佈滿火焰的岩漿峽谷</p>
              </label>
            </div>
          </div>

          <div className="btnArea">
            <Link to={"/Question4"}>
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

export default Question3;
