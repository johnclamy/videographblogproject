import Navbar from "./Navbar"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <Header />
      {children}
    </div>
  )
}