import React, { useState, useEffect, useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import infopic1 from "../assets/pics/infopic1.png";
import infopic2 from "../assets/pics/infopic2.png";
import infopic3 from "../assets/pics/infopic3.png";
import infopic4 from "../assets/pics/infopic4.png";
import infopic5 from "../assets/pics/infopic5.png";

function Info() {
  const {
    setFinaleResult1,
    setFinaleResult2,
    setFinaleResult3,
    setFinaleResult4,
  } = useContext(ResultContext);

  const [currentImage, setCurrentImage] = useState(0);
  const images = [infopic1, infopic2, infopic3, infopic4, infopic5];

  useEffect(() => {
    setFinaleResult1(0);
    setFinaleResult2(0);
    setFinaleResult3(0);
    setFinaleResult4(0);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const backgroundPic = {
    backgroundImage: `url(${images[currentImage]})`,
  };

  return (
    <div>
      <div className="info">
        <div className="banner" style={backgroundPic}>
          <h1>世界上最暢銷的遊戲!</h1>
        </div>
        <div className="second">
          <div className="container">
            <h1>資料來源</h1>
            <div className="item">
              <div className="chapter">
                <p>
                  本網頁之資料及畫面來源取自於微軟旗下Mojang
                  Studios開發的沙盒遊戲-《Minecraft》，在臺灣可稱作《當個創世神》或是《麥塊》，玩家能在3D的世界內與一個個立體方塊互動，並展開探索世界、採集資源、合成物品及生存冒險等。獲獎無數的《Minecraft》最早由瑞典遊戲設計師馬庫斯·佩爾松（遊戲名為Notch）開發，之後由其成立的Mojang
                  AB開發。截至2023年10月，《Minecraft》擁有3億銷量和1.5億月活躍使用者，打破俄羅斯方塊的紀錄並成為有史以來最暢銷的電子遊戲。{" "}
                </p>
              </div>

              <div className="chapter">
                <p>
                  在
                  《Minecraft》的開放世界當中，玩家們沒有特別的任務或是目標要完成，雖然遊戲中確實有結局或成就系統，但是不論達成與否幾乎完全不影響遊戲的進行，在無限生成(水平方向)的地圖上，建造、破壞、探索都是玩家的自由，就如同扮演一位創世神一般。在認識這個世界的同時，玩家沒有太多的遊戲說明，但是摸索這一切，並碰到意想不到的新奇事物，也是這款遊戲最大的樂趣之一。{" "}
                </p>
              </div>

              <div className="chapter">
                <p>
                  提到《Minecraft》最特別的大概就是他和地球一樣，擁有非常多種的生態，譬如本網站引用的豬布林來自鋪滿岩漿的地獄;巫婆最時常出沒在地底下陰暗的鐘乳石洞;而適應力最好的村民可能出現在雪地、沼澤、沙漠、草地、叢林等，甚至是終界、海底遺跡、古代遺跡等自然生成且具有主題性的建築物。本網站希望以心理測驗的方式，推廣並介紹《Minecraft》，希望更多人能認識到遊戲世界中如此有趣又特別動物們。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
