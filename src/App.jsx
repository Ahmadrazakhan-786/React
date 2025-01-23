import "./App.css";
import Video from "./Components/video";
function App(){

  return (
    <div className="App">
      <div>Videos</div>
      <Video bgColor="red" title="React Js Tutorial"></Video>
      <Video bgColor="green"title="Node Js Tutorial"></Video>
    </div>
    
  ) 
}

export default App;