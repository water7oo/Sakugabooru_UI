import logo from "./logo.svg";
import "./App.css";

function Home() {
  return (
    <div id="master">
      <div id="miniNav">
        <button>Posts</button>
        <button>Comments</button>
        <button>Tags</button>
        <button>Wiki</button>
        <button>test5</button>
      </div>
      <div id="logoTitle">
        <img src="\images\Sakugabooru1.png" alt="booruText"></img>
        <p>
          SAKUGA<span class="highlight">BOORU</span>
        </p>
      </div>
      <div id="searchBar">
        <input type="text" placeholder="Search..."></input>
        <button> X </button>
      </div>
      <div id="reccomendations">
        <p>Reccomended Tags</p>
        <div id="tags">
          <div id="tagElements">tag1</div>
          <div id="tagElements">tag1</div>
          <div id="tagElements">tag1</div>
          <div id="tagElements">tag1</div>
          <div id="tagElements">tag1</div>
          <div id="tagElements">tag1</div>
        </div>
      </div>
      <div id="recentSakuga">
        <div id="sakugaElements">SakugaWOW</div>
        <div id="sakugaElements">SakugaWOW</div>
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
