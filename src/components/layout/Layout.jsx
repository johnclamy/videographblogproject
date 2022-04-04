import Header from "./Header"

const Layout = ({ signedIn, onToggleSignIn, children }) => (
  <div className="md:container md:mx-auto">
    <div className="max-w-3xl mx-auto">
      <Header signedIn={signedIn} onToggleSignIn={onToggleSignIn} />
      {children}
    </div>
  </div>
);

export default Layout