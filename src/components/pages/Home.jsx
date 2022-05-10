import AddButton from '../layout/AddButton'
import Toolbar from '../layout/Toolbar'

const Home = () => {
  return (
    <main>
      <header className="mt-4 mb-2">
        <AddButton />
        <Toolbar />
      </header>
    </main>
  );
}

export default Home