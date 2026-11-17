// Notifikasi kecil di pojok kanan bawah (umpan balik setelah tambah / update / hapus)
export default function Toast({ toast, onClose }) {
  if (!toast) return null

  return (
    <div className={`toast toast-${toast.type}`} role="status">
      <span>{toast.message}</span>
      <button type="button" onClick={onClose} aria-label="Tutup notifikasi">×</button>
    </div>
  )
}
