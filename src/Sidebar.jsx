import { social, links } from './data'
import { FaTimes } from 'react-icons/fa'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

// Sidebar Component
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar()
      }
    }

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSidebarOpen, closeSidebar])

  return (
    <aside
      className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}
      ref={sidebarRef}
    >
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
