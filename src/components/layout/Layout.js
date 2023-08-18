import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
    </div>
  )
}