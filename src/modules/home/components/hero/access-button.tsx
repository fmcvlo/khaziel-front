import { ComponentProps } from "react"
import { Button } from "@components/ui/button"
import { cn } from "@lib/util/cn"

export const AccessButton = (props: ComponentProps<"button">) => {
  return (
    <Button
      {...props}
      className={cn(
        "group/btn relative flex min-w-[220px] cursor-pointer items-center justify-center h-12 bg-white text-black hover:bg-zinc-100 transition-colors duration-300 shadow-xl border border-white/50 rounded-none",
        props.className
      )}
    >
      <span className="uppercase text-xs font-black tracking-[0.2em] mr-2">
        Access Drop
      </span>
      <span className="material-symbols-outlined text-[16px] transition-transform group-hover/btn:translate-x-1">
        arrow_forward
      </span>
    </Button>
  )
}
