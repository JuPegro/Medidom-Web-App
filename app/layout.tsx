import './globals.css'

export const metadata = {
  title: 'MEDIDOM',
  description: 'Revolutionizing healthcare in the Dominican Republic. Join us in improving access to quality medical services through technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        </body>
    </html>
  )
}
