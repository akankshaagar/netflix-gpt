
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] p-4 px-12 absolute  text-white bg-black bg-opacity-40 p-4 rounded  ">
       <div className="w-5/12 flex flex-col gap-5">
        <div className="text-6xl font-bold ">{title}</div>
        <p >{overview}</p>
        <div className="flex gap-3 w-1/2 flex-wrap">
            <button className="p-2 rounded bg-white flex-grow text-black hover:bg-opacity-50">Play</button>
            <button className="p-2 rounded bg-gray-500 flex-grow opacity-70 text-white  hover:bg-opacity-50"><span>More info</span></button>
        </div>
</div>

    </div>
  )
}

export default VideoTitle