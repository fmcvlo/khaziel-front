import { AccessButton } from "./access-button"
import { CountdownTimer } from "./countdown-timer"
import { HeroBackground } from "./hero-background"
import { LiveIndicator } from "./live-indicator"

const Hero = () => {
  return (
    <div className="@container w-full font-syne">
      <div className="relative overflow-hidden bg-black group cursor-pointer h-[80vh] min-h-[500px] transition-all duration-700 shadow-sm">
        <HeroBackground />

        <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-20 h-full text-center gap-10">
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-white text-5xl md:text-8xl font-bold uppercase leading-none tracking-[0.2em] drop-shadow-2xl">
              Midnight
              <br />
              <span className="font-light italic text-zinc-100 opacity-90">
                Protocol
              </span>
            </h1>
            <div className="w-24 h-[1px] bg-white/30 mx-auto my-6"></div>
            <h2 className="text-white text-xs md:text-sm font-light max-w-lg mx-auto leading-relaxed tracking-[0.3em] uppercase drop-shadow-md opacity-80">
              Exclusive limited release. 24 hours only. <br />
              The darkness is your canvas.
            </h2>
          </div>

          <CountdownTimer />

          <AccessButton />
        </div>
      </div>
    </div>
  )
}

export default Hero
