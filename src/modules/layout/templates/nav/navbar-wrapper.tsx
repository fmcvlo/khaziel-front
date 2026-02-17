"use client"

import { cn } from "@lib/util/cn"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface NavbarWrapperProps {
  children: React.ReactNode
}

export default function NavbarWrapper({ children }: NavbarWrapperProps) {
  const pathname = usePathname()
  const isHomePage =
    pathname === "/" || pathname === "/es" || pathname === "/en"

  const [isScrolled, setIsScrolled] = useState(!isHomePage)

  useEffect(() => {
    // Resetear estado cuando cambia la página
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }
    setIsScrolled(window.scrollY > 50)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  return (
    <div
      data-scrolled={isScrolled}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 group font-syne",
        isScrolled
          ? "bg-white text-black border-b border-ui-border-base shadow-sm"
          : "bg-transparent text-white border-b border-transparent"
      )}
    >
      {children}
    </div>
  )
}
