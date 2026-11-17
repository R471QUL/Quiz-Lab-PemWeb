import Modal from './Modal.jsx'

// Dialog konfirmasi, dipakai sebelum menghapus tugas
export default function ConfirmDialog({ title, message, confirmLabel = 'Hapus', onConfirm, onCancel }) {
  return (
    <Modal title={title} onClose={onCancel}>
      <p className="confirm-message">{message}</p>
      <div className="form-actions">
        <button type="button" className="btn btn-gray" onClick={onCancel}>Batal</button>
        <button type="button" className="btn btn-red" onClick={onConfirm} autoFocus>{confirmLabel}</button>
      </div>
    </Modal>
  )
}
