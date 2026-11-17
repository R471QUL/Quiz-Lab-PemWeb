import { useEffect, useId } from 'react'

// Kerangka modal: latar gelap + kotak putih di tengah.
// Bisa ditutup dengan tombol Esc (dan klik latar jika closeOnBackdrop = true).
export default function Modal({ title, onClose, closeOnBackdrop = true, children }) {
  const titleId = useId()

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  function handleBackdropMouseDown(event) {
    // hanya tutup kalau yang diklik benar-benar latarnya, bukan isi modal
    if (closeOnBackdrop && event.target === event.currentTarget) onClose()
  }

  return (
    <div className="modal-backdrop" onMouseDown={handleBackdropMouseDown}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <h2 id={titleId}>{title}</h2>
        {children}
      </div>
    </div>
  )
}
