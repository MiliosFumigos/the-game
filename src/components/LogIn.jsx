import React, { useContext, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import piGuid from "../assets/pics/piGuidPor.png";
import { Link } from "react-router-dom";
import { ResultContext } from "../contexts/ResultContext";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const { inputValue, setInputValue } = useContext(ResultContext);
  const [toggle, setToggle] = useState(0);

  const handleClick = () => {
    setToggle((prevToggle) => (prevToggle + 1) % 3);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleLink = (e) => {
    if (inputValue === "") {
      e.preventDefault();
      toast("🐷請先輸入文字🐷");
    }
  };

  return (
    <div className="logIn">
      <div className="cover">
        <div className="answer">
          <div className="text-area">
            <label for="userName">請輸入你的名稱:</label>

            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              id="userName"
              placeholder="例如:Steve"
            />
          </div>
          <div className="btn">
            <Link to={"/Question1"} onClick={handleLink}>
              <button>開始遊戲</button>
            </Link>
            <ToastContainer
              position="top-center"
              autoClose={1530}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Flip}
            />
            <Link to={"/"} className="backHome">
              返回
              <RiArrowGoBackFill />
            </Link>
          </div>
        </div>

        <div className="question" onClick={handleClick}>
          <div className="portrait">
            <img src={piGuid} alt="豬布林蠻兵肖像" />
            <h3>豬布林蠻兵</h3>
          </div>
          <div className="text">
            {toggle === 0 && (
              <p>
                留下你的大名，然後展開一場大發現吧。
                <br />
                (豬布林蠻兵哼氣聲)
              </p>
            )}
            {toggle === 1 && <p>別盯著我看了，開始遊戲吧~</p>}
            {toggle === 2 && (
              <p>
                不想開始遊戲的話，
                <br />
                不然我們來比誰先眨眼睛!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
