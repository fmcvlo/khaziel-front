import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Syne } from "next/font/google"
import "styles/globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={syne.variable}>
      <body>
        {props.children}
      </body>
    </html>
  )
}
