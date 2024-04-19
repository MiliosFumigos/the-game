import React, { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import { Link } from "react-router-dom";
import piglinIcon from "../assets/pics/piglinIcon.png";
import piglinSquare1 from "../assets/pics/piglinSquare1.png";
import piglinSquare2 from "../assets/pics/piglinSquare2.png";
import piglinSquare3 from "../assets/pics/piglinSquare3.png";
import piglinSquare4 from "../assets/pics/piglinSquare4.png";
import piglinSquare5 from "../assets/pics/piglinSquare5.png";

function Result4() {
  const {
    setFinaleResult1,
    setFinaleResult2,
    setFinaleResult3,
    setFinaleResult4,
  } = useContext(ResultContext);

  function handdleReset() {
    setFinaleResult1(0);
    setFinaleResult2(0);
    setFinaleResult3(0);
    setFinaleResult4(0);
  }

  return (
    <div className="result mainArea result4">
      <section className="resultTop">
        <div className="pic">
          <h1>
            別裝了!
            <br />
            你就是豬布林本人吧!
          </h1>
        </div>

        <div className="text">
          <div className="textHeadline">
            <div className="textHeadlineRight">
              <img src={piglinIcon} alt="piglinIcon" />
              <h1 className="type">豬布林</h1>
              <h1 className="headline">
                黃金的信徒
                <br />
                勇往直前不顧一切
              </h1>
            </div>
          </div>
          <div className="discripe">
            <p>
              具有洞察一切的獨特眼光，對於自己的嗜好非常執著，既專情又全心投入於自己熱愛的人事物身上。你就是百分之一百的豬布林小豬豬。即使在極端、惡劣的環境及情況之下為了目標還是能展現出過人的決心，可說是最帥氣的行動派!
            </p>

            <button onClick={handdleReset} className="btn">
              <Link to={"/"}>再測一次!</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bottom">
        <div className="leftPart">
          <div className="square1 square">
            <div className="pic">
              <img src={piglinSquare1} alt="一生摯愛" />
            </div>
            <div className="text">
              <h2>一生摯愛</h2>
              <p>
                豬布林最愛的就是黃金，對於黃金有莫名的執著。甚至可以為了地上的黃金，放棄正在追捕的敵人，真是專情。
              </p>
            </div>
          </div>
        </div>

        <div className="rightPart">
          <div className="square2 square">
            <div className="pic">
              <img src={piglinSquare2} alt="豬的家" />
            </div>
            <div className="text">
              <h2>豬的家</h2>
              <p>
                若是幸運的你看見一座雄偉碉堡聳立在岩漿之上，那就是豬布林的家，裡面有滿滿的豬布林，當然還有黃金。
              </p>
            </div>
          </div>

          <div className="square3 square">
            <div className="pic">
              <img src={piglinSquare3} alt="任意門" />
            </div>
            <div className="text">
              <h2>任意門</h2>
              <p>
                豬布林來自地獄，必須由黑曜石搭建成地獄門並點火才能抵達，遊戲中有不少地獄門的遺跡。
              </p>
            </div>
          </div>

          <div className="square4 square">
            <div className="pic">
              <img src={piglinSquare4} alt="衣架子" />
            </div>
            <div className="text">
              <h2>回火星去吧</h2>
              <p>
                來自地獄的豬布林只要來到地球，就會開始噁心想吐渾身不對勁，最後變成殭屍豬布林。
              </p>
            </div>
          </div>

          <div className="square5 square">
            <div className="pic">
              <img src={piglinSquare5} alt="回火星去吧" />
            </div>
            <div className="text">
              <h2>衣架子</h2>
              <p>
                豬布林對穿搭很有興趣，特別喜歡把可愛的東西放在頭上，不過...他還是偏好黃金製品就是了。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result4;
