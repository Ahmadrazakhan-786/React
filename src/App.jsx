import "./App.css";
import Video from "./Components/video";
function App(){

  return (
    <div className="App">
      <div>Videos</div>
      <Video  title="React Js Tutorial" views="10k" time="1 year ago" channel="Coder Dost"></Video>
      <Video title="Node Js Tutorial " views="100k" time="1 month ago" channel="Coder Dost"></Video>
      <Video title="Mongo DB Tutorial " views="1M" time="2 month ago" channel="Coder Dost"></Video>
    </div>
    
  ) 
}

export default App;