import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={imageInSrc} />

        <br />

        <img src="./imageInPublic.jpg" />
      </div>

      <iframe
        width="956"
        height="538"
        src="https://www.youtube.com/embed/MQj-tZEOZko"
        title="موسيقى هادئة، موسيقا مع مناظر طبيعية خلابة"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
