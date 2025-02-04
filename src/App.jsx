import "./App.css";
import Video from "./Components/video";
import PlayButton from "./Components/PlayButton";
function App(){ // always name the filename with capital letter
  let videos = [{
    title: 'React Js Tutorial',
    views: '10k',
    time: '1 year ago',
    channel: 'coder Dost',
    verified: true
  },{
    title: 'Node Js Tutorial',
    views: '100k',
    time: '1 month ago',
    channel: 'coder Dost',
    verified: false
  } ,{
    title: 'Mongo DB Tutorial',
    views: '1M',
    time: '2 year ago',
    channel: 'coder Dost',
    verified: true
  }];
  return (
    <div className="App">
      {/* <PlayButton /> */}
      <div>Videos</div>
      {
        videos.map(video=> <Video verified={video.verified} title={video.title} views={video.views} time={video.views} channel={video.channel}></Video>)
      }
      {/* <Video verified={true} title="React Js Tutorial" views="10k" time="1 year ago" channel="Coder Dost"></Video>
      <Video verified={false} title="Node Js Tutorial " views="100k" time="1 month ago" channel="Coder Dost"></Video> */}
      
       {/* clear: both removes upper work */}
      <div style={{clear:'both'}}> 
    
      <PlayButton message="play-msg" onClick={()=>console.log('playyy')}>Play</PlayButton>
      <PlayButton message="pause-msg" onClick={()=>alert('playyy')}>Pause</PlayButton>
      </div>
      
    </div>
    
  ) ;
}

export default App;