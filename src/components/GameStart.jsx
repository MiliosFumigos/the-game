import React, { useEffect, useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import { Link } from "react-router-dom";
import littleLogo from "../assets/pics/littleLogo.png";

function GameStart() {
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
    <div className="gameStart main-area">
      <div className="cover">
        <div className="logo">
          <div className="pic">
            <img src={littleLogo} alt="littleLogo" />
          </div>
        </div>
        <div className="headline">
          {/* <h1>猜猜你的個性最像是哪一種MineCraft生物?</h1> */}
          <h1>
            面對十題的靈魂拷問，
            <br />
            揭開自己的身世之謎吧!
          </h1>
        </div>
        <div className="button">
          <Link to={"/Question1"}>
            <button>開始作答!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameStart;
