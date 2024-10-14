import logo from "./logo.svg";
import "./App.css";

function Home() {
  return (
    <div id="master">
      <div id="miniNav">
        <button>Posts</button>
        <span></span>
        <button>Comments</button>
        <span></span>
        <button>Tags</button>
        <span></span>
        <button>Wiki</button>
        <span></span>
        <button>test5</button>
      </div>
      <div id="logoTitle">
        <div id="logoContainer">
          <img src="\images\Sakugabooru1(whitefill).png" alt="booruText"></img>
        </div>
        <span></span>
        <p>
          SAKUGA<span class="highlight">BOORU</span>
        </p>
      </div>
      <div id="searchBar">
        <input type="text" placeholder="Search..."></input>
        <button> X </button>
      </div>
      <div id="searchBtn">
        <button>Search</button>
      </div>
      <div id="reccomendations">
        <div id="reccomendTags">
          <p>Reccomended:</p>
        </div>
        <div id="tags">
          <button id="tagElements">kanada_flare</button>
          <button id="tagElements">yutapon_cubes</button>
          <button id="tagElements">umikoshi_eye</button>
          <button id="tagElements">smears</button>
          <button id="tagElements">character_acting</button>
        </div>
      </div>
      <div id="recentSakuga">
        <div id="sakugaElements">SakugaWOW</div>
        <div id="sakugaElements">SakugaWOW</div>
        <div id="sakugaElements">SakugaWOW</div>
        <div id="sakugaElements">SakugaWOW</div>
      </div>
    </div>
  );
}

function App() {
  return <div>{Home()}</div>;
}

export default App;
