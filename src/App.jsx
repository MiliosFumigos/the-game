import React, { useState } from "react";
import { ResultContext } from "./contexts/ResultContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Intro from "./components/Intro";
import GameStart from "./components/GameStart";
import Question1 from "./components/Questions/Question1";
import Question2 from "./components/Questions/Question2";
import Question3 from "./components/Questions/Question3";
import Question4 from "./components/Questions/Question4";
import Question5 from "./components/Questions/Question5";
import Question6 from "./components/Questions/Question6";
import Question7 from "./components/Questions/Question7";
import Question8 from "./components/Questions/Question8";
import Question9 from "./components/Questions/Question9";
import Question10 from "./components/Questions/Question10";
import Result1 from "./components/Result1";
import Result2 from "./components/Result2";
import Result3 from "./components/Result3";
import Result4 from "./components/Result4";
import ScrollToTop from "./components/ScrollToTop";
import LogIn from "./components/LogIn";
import "./styles/App.css";

function App() {
  const [finaleResult1, setFinaleResult1] = useState(0);
  const [finaleResult2, setFinaleResult2] = useState(0);
  const [finaleResult3, setFinaleResult3] = useState(0);
  const [finaleResult4, setFinaleResult4] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <ResultContext.Provider
        value={{
          finaleResult1,
          setFinaleResult1,
          finaleResult2,
          setFinaleResult2,
          finaleResult3,
          setFinaleResult3,
          finaleResult4,
          setFinaleResult4,
          inputValue,
          setInputValue,
        }}
      >
        <HashRouter basename="/">
          <ScrollToTop />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<GameStart />}></Route>
              <Route path="Info" element={<Info />}></Route>
              <Route path="Intro" element={<Intro />}></Route>
              <Route path="LogIn" element={<LogIn />}></Route>
              <Route path="Question1" element={<Question1 />}></Route>
              <Route path="Question2" element={<Question2 />}></Route>
              <Route path="Question3" element={<Question3 />}></Route>
              <Route path="Question4" element={<Question4 />}></Route>
              <Route path="Question5" element={<Question5 />}></Route>
              <Route path="Question6" element={<Question6 />}></Route>
              <Route path="Question7" element={<Question7 />}></Route>
              <Route path="Question8" element={<Question8 />}></Route>
              <Route path="Question9" element={<Question9 />}></Route>
              <Route path="Question10" element={<Question10 />}></Route>
              <Route path="Result1" element={<Result1 />}></Route>
              <Route path="Result2" element={<Result2 />}></Route>
              <Route path="Result3" element={<Result3 />}></Route>
              <Route path="Result4" element={<Result4 />}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </ResultContext.Provider>
    </div>
  );
}

export default App;
