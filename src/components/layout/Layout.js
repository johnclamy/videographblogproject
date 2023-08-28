import Navbar from "./Navbar"
import UserBar from "../../app/users/UserBar"
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <UserBar />
      {children}
      <Footer />
    </div>
  )
}