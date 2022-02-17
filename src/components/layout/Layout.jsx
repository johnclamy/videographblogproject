import Header from "./Header"

const Layout = ({ children }) => (
  <div className="md:container md:mx-auto">
    <div className="max-w-3xl mx-auto">
      <Header />
      {children}
    </div>
  </div>
)

export default Layout