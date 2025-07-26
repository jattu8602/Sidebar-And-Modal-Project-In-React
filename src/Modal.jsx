import { FaTimes } from 'react-icons/fa'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

// Modal Component
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalOpen, closeModal])

  return (
    <div className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}>
      <div className="modal-container" ref={modalRef}>
        <h3
          style={{
            margin: 0,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '0.5px',
          }}
        >
          modal content
        </h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
