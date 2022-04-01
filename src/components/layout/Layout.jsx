import Header from "./Header"

const Layout = ({ signedIn, children }) => (
  <div className="md:container md:mx-auto">
    <div className="max-w-3xl mx-auto">
      <Header signedIn={signedIn} />
      {children}
    </div>
  </div>
);

export default Layout