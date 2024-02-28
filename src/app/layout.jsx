import "./globals.sass"
import { antonio, spartan } from "./utils/fonts"
import Navbar from "./components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${antonio.variable} ${spartan.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}