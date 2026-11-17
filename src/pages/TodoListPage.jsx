import { useState } from 'react'
import { Link } from 'react-router'
import Badge from '../components/Badge.jsx'
import ConfirmDialog from '../components/ConfirmDialog.jsx'
import { EyeIcon, TrashIcon } from '../components/Icons.jsx'
import TodoFormModal from '../components/TodoFormModal.jsx'

// Halaman utama: tabel daftar tugas + tombol Tambah Todo
export default function TodoListPage({ todos, onAdd, onDelete }) {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [todoToDelete, setTodoToDelete] = useState(null) // tugas yang menunggu konfirmasi hapus

  function handleSubmitAdd(data) {
    onAdd(data)
    setIsAddOpen(false)
  }

  function handleConfirmDelete() {
    onDelete(todoToDelete.id)
    setTodoToDelete(null)
  }

  return (
    <>
      <div className="page-header">
        <h1>Todo List</h1>
        <button type="button" className="btn btn-blue" onClick={() => setIsAddOpen(true)}>
          Tambah Todo
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="empty">Belum ada tugas. Klik "Tambah Todo" untuk membuat tugas pertamamu.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Judul</th>
                <th>Status</th>
                <th>Prioritas</th>
                <th>Deadline</th>
                <th className="col-aksi">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.id}>
                  <td data-label="Judul">
                    <span className="title-text" title={todo.title}>{todo.title}</span>
                  </td>
                  <td data-label="Status"><Badge value={todo.status} /></td>
                  <td data-label="Prioritas"><Badge value={todo.priority} /></td>
                  <td data-label="Deadline">{todo.deadline}</td>
                  <td data-label="Aksi" className="col-aksi">
                    <div className="actions">
                      <Link
                        to={`/todo/${todo.id}`}
                        className="btn btn-blue icon-btn"
                        aria-label={`Lihat detail ${todo.title}`}
                        title="Lihat detail"
                      >
                        <EyeIcon />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-red icon-btn"
                        aria-label={`Hapus ${todo.title}`}
                        title="Hapus"
                        onClick={() => setTodoToDelete(todo)}
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isAddOpen && (
        <TodoFormModal mode="add" onSubmit={handleSubmitAdd} onClose={() => setIsAddOpen(false)} />
      )}

      {todoToDelete && (
        <ConfirmDialog
          title="Hapus Tugas"
          message={`Yakin ingin menghapus tugas "${todoToDelete.title}"? Tindakan ini tidak dapat dibatalkan.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setTodoToDelete(null)}
        />
      )}
    </>
  )
}
