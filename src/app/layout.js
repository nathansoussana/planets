import "./globals.sass"
import { antonio, spartan } from "./utils/fonts"

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${antonio.variable} ${spartan.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}