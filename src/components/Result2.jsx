import React, { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import { Link } from "react-router-dom";
import villagerIcon from "../assets/pics/villagerIcon.png";
import villagerSquare1 from "../assets/pics/villagerSquare1.png";
import villagerSquare2 from "../assets/pics/villagerSquare2.png";
import villagerSquare3 from "../assets/pics/villagerSquare3.png";
import villagerSquare4 from "../assets/pics/villagerSquare4.png";
import villagerSquare5 from "../assets/pics/villagerSquare5.png";
function Result2() {
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
    <div className="result mainArea result2">
      <section className="resultTop">
        <div className="pic">
          <h1>
            發現了! <br /> 你就是千變萬化的村民吧!
          </h1>
        </div>

        <div className="text">
          <div className="textHeadline">
            <div className="textHeadlineRight">
              <img src={villagerIcon} alt="villagerIcon" />
              <h1 className="type">村民</h1>
              <h1 className="headline">
                多才又時尚 <br />
                沒有什麼辦不到的!
              </h1>
            </div>
          </div>
          <div className="discripe">
            <p>
              總是給人呆萌的形象，為自己爭取到不少機會之外，人緣也非常好。總是能跟上流行甚至帶領流行，懂打扮也充實內在，若是下定決心就算是最新穎最尖端的技術也能習得。如此優秀的你正如Minecraft當中最優秀的村民，地表上最強非你莫屬。
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
              <img src={villagerSquare1} alt="千變萬化" />
            </div>
            <div className="text">
              <h2>天賦異稟</h2>
              <p>
                村民非常具有智慧，是遊戲之中唯一能學習職業的生物，且會根據習得之專業技能改變外觀，並出沒在專業的場所。不過，也是有村民什麼都不學就是了。
              </p>
            </div>
          </div>
        </div>

        <div className="rightPart">
          <div className="square2 square">
            <div className="pic">
              <img src={villagerSquare2} alt="素食主義" />
            </div>
            <div className="text">
              <h2>素食主義</h2>
              <p>
                村莊裡幾乎都有農田，但不一定有畜牧。且儲物箱裡裝得大多都是素食，由此可見村民們大多是素食者。
              </p>
            </div>
          </div>

          <div className="square3 square">
            <div className="pic">
              <img src={villagerSquare3} alt="時尚達人" />
            </div>
            <div className="text">
              <h2>時尚達人</h2>
              <p>
                不同的環境之下，可以看出村民的建築以及服飾都因地制宜，而且和大自然非常融入呢。
              </p>
            </div>
          </div>

          <div className="square4 square">
            <div className="pic">
              <img src={villagerSquare4} alt="牙癢癢" />
            </div>
            <div className="text">
              <h2>牙癢癢</h2>
              <p>
                村民的膚色都是一樣的，除非...他被殭屍咬了!遇到面露凶光的村民，那他肯定是生病了。
              </p>
            </div>
          </div>

          <div className="square5 square">
            <div className="pic">
              <img src={villagerSquare5} alt="按時繳納管理費" />
            </div>
            <div className="text">
              <h2>按時繳納管理費</h2>
              <p>
                村民人數夠多的話，他們就會請鐵魔像來保護村莊，這樣就不怕半夜殭屍敲門囉。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result2;
