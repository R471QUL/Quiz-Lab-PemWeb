import { useState } from 'react'
import { Link, useParams } from 'react-router'
import Badge from '../components/Badge.jsx'
import TodoFormModal from '../components/TodoFormModal.jsx'

// Halaman detail: /todo/:id, dengan tombol Kembali dan Update
export default function TodoDetailPage({ todos, onUpdate }) {
  const { id } = useParams() // selalu berupa string, jadi diubah ke angka saat mencari
  const [isEditOpen, setIsEditOpen] = useState(false)

  const todo = todos.find(item => item.id === Number(id))

  if (!todo) {
    return (
      <div className="detail-card detail-empty">
        <p>Tugas tidak ditemukan. Mungkin sudah dihapus.</p>
        <Link to="/" className="btn btn-red">Kembali</Link>
      </div>
    )
  }

  function handleSubmitUpdate(data) {
    onUpdate(todo.id, data)
    setIsEditOpen(false)
  }

  return (
    <>
      <section className="detail-card">
        <dl className="detail-main">
          <dt>Judul</dt>
          <dd>{todo.title}</dd>
          <dt>Deskripsi</dt>
          <dd className="description-box">{todo.description || '-'}</dd>
        </dl>

        <div className="detail-side">
          <dl>
            <dt>Status</dt>
            <dd><Badge value={todo.status} /></dd>
            <dt>Prioritas</dt>
            <dd><Badge value={todo.priority} /></dd>
            <dt>Deadline</dt>
            <dd>{todo.deadline}</dd>
          </dl>

          <div className="detail-actions">
            <Link to="/" className="btn btn-red">Kembali</Link>
            <button type="button" className="btn btn-blue" onClick={() => setIsEditOpen(true)}>
              Update
            </button>
          </div>
        </div>
      </section>

      {isEditOpen && (
        <TodoFormModal
          mode="update"
          initialValues={todo}
          onSubmit={handleSubmitUpdate}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </>
  )
}
