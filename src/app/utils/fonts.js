import { Antonio, League_Spartan } from 'next/font/google'
 
export const antonio = Antonio({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--antonio',
})
 
export const spartan = League_Spartan({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--spartan',
})