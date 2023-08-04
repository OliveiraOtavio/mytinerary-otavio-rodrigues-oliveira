import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
