import './globals.css'
import { inter } from './font'
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from '@/components/NavBar'




export const metadata = {
  title: 'Saqib Hussain | Personal Portfolio',
  description: 'Saqib Hussain is a self taught frontend web developer who uses industries best practices to bring product ideas to life.',
}

export default function RootLayout({ children }) {
  
    
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar/>
          <div className='py-12 container'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
