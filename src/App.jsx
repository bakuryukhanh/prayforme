import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.less";
import Match from "./Match";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="center">
      <div className="quarter-final card">
        <h3>Quarter Finals</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Match />
          <Match />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Match />
          <Match />
        </div>
      </div>
      <div className="round16 card">
        <h4>Round of 16</h4>
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
      <div className="round16-2 card">
        <h4>Round of 16</h4>
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
      <div className="semi-final card">
        <h2>Semi Finals</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Match />
          <Match />
        </div>
      </div>
      <div className="third-place card">
        <h2>Third Place</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Match />
        </div>
      </div>
      <div className="final card">
        <h1>Final</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Match direction="vertical" />
        </div>
      </div>
      <iv className="check"></iv>
      <div className="b1"></div>
      <div className="b2"></div>
      <div className="b3"></div>
      <div className="b2"></div>
      <div className="b4"></div>
      <div className="b5"></div>
      <div className="b7"></div>
      <div className="b6"></div>
      <div className="br1"></div>
      <div className="br2"></div>
      <div className="br3"></div>
      <div className="br2"></div>
      <div className="br4"></div>
      <div className="br5"></div>
      <div className="br7"></div>
      <div className="br6"></div>
      <div className="c1"></div>
      <div className="c3"></div>
      <div className="c5"></div>
      <div className="c4"></div>
    </div>
  );
}

export default App;
