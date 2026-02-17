export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
      >
        <source src="/prime.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Gentle Monster style overlays */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </div>
  )
}
