

const VideoTitle = ({title})=>{


    return (
        <div className="w-screen aspect-video pt-52 px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold w-2/4">{title}</h1>

            <div>
                <button className="bg-gray-500 mt-10 mr-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">Play</button>
                <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;