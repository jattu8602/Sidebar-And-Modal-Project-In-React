import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

// Home Component
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  )
}
export default Home
