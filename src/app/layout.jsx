import { Inter, Open_Sans ,Poppins} from 'next/font/google'
import { Providers } from './providers'

const inter = Poppins({ subsets: ['latin'] ,weight:['400']})

export const metadata = {
  title: 'Subhuam Tangar',
  description: 'Profile website',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  )
}
