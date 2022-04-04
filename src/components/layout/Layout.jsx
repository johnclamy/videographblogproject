import Header from "./Header"

const Layout = ({ signedIn, onToggleSignin, children }) => (
  <div className="md:container md:mx-auto">
    <div className="max-w-3xl mx-auto">
      <Header signedIn={signedIn} onToggleSignin={onToggleSignin} />
      {children}
    </div>
  </div>
);

export default Layout