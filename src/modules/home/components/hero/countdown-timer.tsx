import { ComponentProps } from "react"

export const CountdownTimer = () => {
  return (
    <div className="flex gap-4 md:gap-8 py-4">
      <TimerItem value="00" label="Days" />
      <TimerItem value="14" label="Hours" />
      <TimerItem value="32" label="Mins" />
      <TimerItem value="45" label="Secs" />
    </div>
  )
}

const TimerItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="flex h-14 w-12 md:h-16 md:w-16 items-center justify-center border border-white/40 bg-white/20 backdrop-blur-md">
      <p className="text-white text-xl md:text-2xl font-bold font-mono drop-shadow-sm">
        {value}
      </p>
    </div>
    <p className="text-white/80 text-[9px] uppercase tracking-widest font-bold">
      {label}
    </p>
  </div>
)



