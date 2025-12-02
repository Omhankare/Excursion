import "./App.css";

import video from "/excursion.mp4";
import camp from "/camp.jpg";
import phone from "/phone.png";

function App() {
  return (
    <>
      <h1 className="head">Discover hidden places in the world around you</h1>

      <p className="download">Download Excursion (Coming soon!)</p>

      <video src={video} muted loop autoPlay></video>

      <h1 className="travel">Your personal travel guide</h1>

      <p>
        Excursion remembers places you like, and recommends new points of
        interest around you.
      </p>

      <img src={camp} alt="campPhoto" />
      <p>
        <img src={phone} alt="phone symbol" />
      </p>

      <h1 className="travel">Coming Soon for iPhone and Android</h1>

      <p className="download">Download Excursion (Coming soon!)</p>

      <p className="copy">© Excursion made by Om Hankare</p>
    </>
  );
}

export default App;
