import Navbar from "./Navbar"
import UserBar from "../../app/users/UserBar"

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <UserBar />
      {children}
    </div>
  )
}