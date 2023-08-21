import Navbar from "./Navbar"
import UserBar from "../../app/users/UserBar"
import FilterBar from "./FilterBar"

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <UserBar />
      <FilterBar />
      {children}
    </div>
  )
}