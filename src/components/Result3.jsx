import React, { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import { Link } from "react-router-dom";
import witchIcon from "../assets/pics/witchIcon.png";
import witchSquare1 from "../assets/pics/witchSquare1.png";
import witchSquare2 from "../assets/pics/witchSquare2.png";
import witchSquare3 from "../assets/pics/witchSquare3.png";
import witchSquare4 from "../assets/pics/witchSquare4.png";
import witchSquare5 from "../assets/pics/witchSquare5.png";
function Result3() {
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
    <div className="result mainArea result3">
      <section className="resultTop">
        <div className="pic">
          <h1>
            咯咯咯
            <br />
            你有成為女巫的潛力喔!
          </h1>
        </div>

        <div className="text">
          <div className="textHeadline">
            <div className="textHeadlineRight">
              <img src={witchIcon} alt="witchIcon" />
              <h1 className="type">女巫</h1>
              <h1 className="headline">
                可愛又迷人
                <br />
                神秘與智慧的化身~
              </h1>
            </div>
          </div>
          <div className="discripe">
            <p>
              身上總是圍繞著神祕的氣息，行為舉止和外表都異於常人，有著屬於自己的獨特魅力。可能時常覺得身邊的人有點笨，那你的直覺是對的，因為女巫就是這麼特別如同限量版一般的存在。偶爾出外踏踏青，大自然說不定比人群更能帶給你力量。
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
              <img src={witchSquare1} alt="隨手一瓶" />
            </div>
            <div className="text">
              <h2>隨手一瓶</h2>
              <p>
                女巫的攻擊方式非常特別，他會將隨身攜帶的劇毒、傷害、虛弱、緩速藥水，往靠他太近的玩家狂丟猛丟。
              </p>
            </div>
          </div>
        </div>

        <div className="rightPart">
          <div className="square2 square">
            <div className="pic">
              <img src={witchSquare2} alt="環保尖兵" />
            </div>
            <div className="text">
              <h2>環保尖兵</h2>
              <p>
                當女巫受到攻擊，需要療癒的時候會拿出治療藥水狂飲，喝法非常豪邁，直接以瓶就口不需要吸管喔。
              </p>
            </div>
          </div>

          <div className="square3 square">
            <div className="pic">
              <img src={witchSquare3} alt="愛貓人士" />
            </div>
            <div className="text">
              <h2>愛貓人士</h2>
              <p>
                若有幸受邀到女巫之家作客，您一定會遇到這隻黏人的黑貓，據說他和女巫從出生就形影不離。
              </p>
            </div>
          </div>

          <div className="square4 square">
            <div className="pic">
              <img src={witchSquare4} alt="魔法閃耀" />
            </div>
            <div className="text">
              <h2>魔法閃耀</h2>
              <p>
                女巫每秒以1.5%的機率在頭上生成泡沫狀的魔法粒子，難道是美到冒泡嗎?
              </p>
            </div>
          </div>

          <div className="square5 square">
            <div className="pic">
              <img src={witchSquare5} alt="一電之隔" />
            </div>
            <div className="text">
              <h2>一電之隔</h2>
              <p>
                女巫的外表，除了大鼻子之外幾乎和村民一模一樣，據說他和村民之間的差別，只在於一道閃電。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result3;
