import './Video.css';

function Video({title,channel,views,time,verified}){
    let channelJSX;
    if(verified){
      channelJSX = <div className="channel">{channel} ✅</div>
    } else{
        channelJSX = <div className="channel">{channel} </div>
    }

    return ( 
    <div className="container">
        <div className="pic">
        <img src="https://pixlr.com/images/generator/how-to-generate.webp" alt="" />
        </div>
        <div className="title">{title}</div>
        {channelJSX}
        <div className="views">
            {views} views <span>.</span> {time}
        </div>
    </div>
    )
}
{/* <></> : fragment in react */}


export default Video;