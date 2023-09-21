import RegisterModal from './components/modals/RegisterModal'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from '@/app/actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
export const metadata = {
  title: 'Vacation Homes & Condo Rentals - Airbnb - Airbnb',
  description: 'Vacation Homes & Condo Rentals - Airbnb - Airbnb',
}
const font = Nunito({
  subsets:['latin']

})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <RentModal/>
        <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}</body>
    </html>
  )
}
