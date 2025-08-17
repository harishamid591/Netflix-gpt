


const VideoBackground = ({movieId})=>{


    return (
        <div>
           <iframe 
           className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/"+movieId +"?&autoplay=1&mute=1"} title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           ></iframe>
        </div>
    )
}

export default VideoBackground;