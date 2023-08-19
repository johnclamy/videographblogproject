import Navbar from "./Navbar"
import Auth from "../widgets/Auth"

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <Auth />
      {children}
    </div>
  )
}