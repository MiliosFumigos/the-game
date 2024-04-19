import React, { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import { Link } from "react-router-dom";
import creeperIcon from "../assets/pics/creeperIcon.png";
import creeperSquare1 from "../assets/pics/creeperSquare1.png";
import creeperSquare2 from "../assets/pics/creeperSquare2.png";
import creeperSquare3 from "../assets/pics/creeperSquare3.png";
import creeperSquare4 from "../assets/pics/creeperSquare4.png";
import creeperSquare5 from "../assets/pics/creeperSquare5.png";
function Result1() {
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
    <div className="result mainArea">
      <section className="resultTop">
        <div className="pic">
          <h1>
            恭喜你! <br /> 你和苦力怕非常相似喔~
          </h1>
        </div>

        <div className="text" id="intr01">
          <div className="textHeadline">
            <div className="textHeadlineRight">
              <img src={creeperIcon} alt="creeperIcon" />
              <h1 className="type">苦力怕</h1>
              <h1 className="headline">
                一和人相處 <br />
                就緊張的快要爆炸!
              </h1>
            </div>
          </div>
          <div className="discripe">
            <p>
              外表看起來有些難相處，其實是個相當親切大方的好人，有好東西肯定會和親朋好友分享，不願只有自己受益。但是遇上了想要認識的人，卻顯得有些社恐，一接近人就緊張得快要炸掉了。求好心切但又害怕做錯害怕失敗時的你是不是很像苦力怕呢?
            </p>

            <button onClick={handdleReset}>
              <Link to={"/"}>再測一次!</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bottom">
        <div className="leftPart">
          <div className="square1 square">
            <div className="pic">
              <img src={creeperSquare1} alt="行走炸彈" />
            </div>
            <div className="text">
              <h2>行走炸彈</h2>
              <p>
                在一定的範圍內被苦力怕察覺，苦力怕就會追上去之後原地爆炸。不只是玩家，連周遭的方塊都會被炸掉，所以遇到他的話，還是躲遠一點點欣賞就好了吧。
              </p>
            </div>
          </div>
        </div>

        <div className="rightPart">
          <div className="square2 square">
            <div className="pic">
              <img src={creeperSquare2} alt="隨身聽" />
            </div>
            <div className="text">
              <h2>隨身聽</h2>
              <p>
                平常的靜悄悄的苦力怕，其實竟然是個音樂迷!?苦力怕隨身攜帶炸藥以外還時常帶著黑膠唱片。
              </p>
            </div>
          </div>

          <div className="square3 square">
            <div className="pic">
              <img src={creeperSquare3} alt="嘿嘿~原來你怕這個" />
            </div>
            <div className="text">
              <h2>嘿嘿~原來你怕這個</h2>
              <p>
                如果你剛好時常被苦力怕給盯上，請隨身攜帶盾牌，舉起盾牌對著苦力怕，他就沒轍了。
              </p>
            </div>
          </div>

          <div className="square4 square">
            <div className="pic">
              <img src={creeperSquare4} alt="勇敢的苦力怕" />
            </div>
            <div className="text">
              <h2>勇敢的苦力怕</h2>
              <p>
                苦力怕在黑暗中誕生，但也不怕光線，如果他鼓起勇氣到你家拜訪，他可能會不小心都更起來(爆炸)。
              </p>
            </div>
          </div>

          <div className="square5 square">
            <div className="pic">
              <img src={creeperSquare5} alt="閃電選擇了你!" />
            </div>
            <div className="text">
              <h2>閃電選擇了你!</h2>
              <p>
                被閃電擊中的苦力怕，會像超級賽亞人一樣發光，並且帶來雙倍的爆炸!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result1;
