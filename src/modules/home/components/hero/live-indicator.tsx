export const LiveIndicator = () => {
  return (
    <div className="flex items-center gap-3 border border-white/30 px-6 py-2 bg-white/10 backdrop-blur-md shadow-lg w-fit">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
      <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] drop-shadow-md">
        Live Now
      </span>
    </div>
  )
}



