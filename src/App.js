import "./App.css";
import TestStuff from "./bgCarousel";

function Home() {
  return (
    <div id="master">
      <TestStuff />
      <div id="logoTitle">
        <div id="logoContainer">
          <img src="\images\Sakugabooru1(whitefill).png" alt="booruText"></img>
        </div>
        <span></span>
        <p>
          SAKUGA<span class="highlight">BOORU</span>
        </p>
      </div>

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
      <div id="searchBar">
        <input type="text" placeholder="Search..."></input>
        <span></span>
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
          <span></span>
          <button id="tagElements">yutapon_cubes</button>
          <span></span>
          <button id="tagElements">umikoshi_eye</button>
          <span></span>
          <button id="tagElements">smears</button>
          <span></span>
          <button id="tagElements">character_acting</button>
          <span></span>
          <button id="tagElements">character_acting</button>
          <span></span>
          <button id="tagElements">character_acting</button>
          <span></span>
          <button id="tagElements">character_acting</button>
          <span></span>
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
