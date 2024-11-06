import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col h-[480px] w-[800px] bg-[#F25872]">
      <div className="flex-1 flex gap-8 p-10">
        <img
          id="album-cover"
          className="w-64 h-64 rounded-lg shadow-lg object-cover"
          src="https://i.scdn.co/image/ab67616d00001e02c5716278abba6a103ad13aa7"
          alt="Album cover"
        />
        <div className="flex flex-col justify-center">
          <div className="text-2xl text-white">Single</div>
          <h1 className="text-[80px] font-bold text-white leading-none">夜に駆ける</h1>
          <div className="text-2xl text-white">YOASOBI</div>
        </div>
      </div>
      <div className="h-[140px] relative p-10">
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
        <div className="absolute inset-x-10 inset-y-0 flex justify-center items-center gap-[88px] z-10">
          <button className="w-10 h-10 text-white text-4xl flex items-center justify-center" aria-label="Add to Favorites">
            <Heart className="w-8 h-8" />
          </button>
          <button className="w-10 h-10 text-white text-4xl flex items-center justify-center" aria-label="Shuffle">
            <Shuffle className="w-8 h-8" />
          </button>
          <button className="w-10 h-10 text-white text-4xl flex items-center justify-center" aria-label="Previous Track">
            <SkipBack className="w-8 h-8" />
          </button>
          <button className="w-10 h-10 text-white text-4xl flex items-center justify-center" aria-label="Play">
            <Play className="w-8 h-8" />
          </button>
          <button className="w-10 h-10 text-white text-4xl flex items-center justify-center" aria-label="Next Track">
            <SkipForward className="w-8 h-8" />
          </button>
          <button className="w-10 h-10 text-white text-4xl flex items-center justify-center" aria-label="Repeat">
            <Repeat className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  )
}