import '@/app/globals.css'
import style from './layout.module.css'

export const metadata = {
  title: 'togame',
  description: '',

}

export default function RootLayout({ children, }: { children?: React.ReactNode }) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </>
  )
} 