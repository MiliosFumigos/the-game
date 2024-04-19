import React, { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContext";
import { Link } from "react-scroll";
import introCreeperTop from "../assets/pics/introCreeperTop.png";
import introVillagerTop from "../assets/pics/introVillagerTop.png";
import introWitchTop from "../assets/pics/introWitchTop.png";
import introPiglinTop from "../assets/pics/introPiglinTop.png";
function Intro() {
  const {
    setFinaleResult1,
    setFinaleResult2,
    setFinaleResult3,
    setFinaleResult4,
  } = useContext(ResultContext);

  useEffect(() => {
    setFinaleResult1(0);
    setFinaleResult2(0);
    setFinaleResult3(0);
    setFinaleResult4(0);
  });

  return (
    <div className="intro">
      <section className="top">
        <div className="card">
          <div className="pic">
            <img src={introCreeperTop} alt="苦力怕 Creeper" />
          </div>
          <div className="text">
            <h2>苦力怕 Creeper</h2>
            <p>
              遊戲當中知名度最高的角色，很多就算不是Minecraft的玩家，看見這張綠綠的臉，都能馬上說出:"苦力怕!"。
            </p>

            <Link
              to="creeper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button>簡介</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="pic">
            <img src={introVillagerTop} alt="村民 Villager" />
          </div>
          <div className="text">
            <h2>村民 Villager</h2>
            <p>
              如果你在探險的途中，看見地平面上出現了幾棟顏色相近的建築物，那肯定是你遇到了村民!趕快帶著綠寶石來跟他們交易吧~
            </p>

            <Link
              to="villager"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button>簡介</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="pic">
            <img src={introWitchTop} alt="巫婆 Witch" />
          </div>
          <div className="text">
            <h2>女巫 Witch</h2>
            <p>
              巫婆是遊戲中非常神秘的存在，長相和村民非常相似，只會攻擊玩家而不會攻擊村民，據說...他只在暴風雨之中誕生。
            </p>

            <Link
              to="witch"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button>簡介</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="pic">
            <img src={introPiglinTop} alt="豬布林 Piglin" />
          </div>
          <div className="text">
            <h2>豬布林 Piglin</h2>
            <p>
              生活在地獄之中的豬布林，總是一群一群的出現，只要身上穿著黃金製作的服飾，就可以和他當朋友喔~
            </p>

            <Link
              to="piglin"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button>簡介</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="area area1" id="creeper">
        <div className="banner">
          <div className="banner-text">
            <h1>苦力怕 Creeper</h1>
            <p>
              遊戲之中的人氣巨星-苦力怕，就和他的英文名字Creeper一樣，會在黑夜裡靜悄悄地接近你。當你聽到他發出的聲音，那大概是他已經在你身後準備了個大驚喜。
            </p>
          </div>
        </div>
      </section>
      <section className="area area2" id="villager">
        <div className="banner">
          <div className="banner-text">
            <h1>村民 Villager</h1>
            <p>
              根據不同環境會生成出不同造型的村民，不變的是他們都對玩家非常友善。雖然有時候不太愛理人，只要你身上帶著綠寶石，就能和他們來一場交易。
            </p>
          </div>
        </div>
      </section>
      <section className="area area3" id="witch">
        <div className="banner">
          <div className="banner-text">
            <h1>女巫 Witch</h1>
            <p>
              在陰暗的洞穴裡傳出了咯咯咯的笑聲，可別離女巫太近，他不像是村民想要和你來場交易。若是靠太近的話，你就等著被他隨身攜帶的瓶瓶罐罐給伺候吧。
            </p>
          </div>
        </div>
      </section>
      <section className="area area4" id="piglin">
        <div className="banner">
          <div className="banner-text">
            <h1>豬布林 Piglin</h1>
            <p>
              脾氣有些暴躁，在他粗獷的外表下，內心卻住著一隻愛好藝術的小豬。若在他面前丟出任何黃金製品，豬布林會快速的將它撿起並放在手中仔細端詳。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
