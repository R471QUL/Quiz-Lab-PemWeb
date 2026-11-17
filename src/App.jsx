import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Toast from './components/Toast.jsx'
import { dummyTodos } from './data/dummyTodos.js'
import NotFoundPage from './pages/NotFoundPage.jsx'
import TodoDetailPage from './pages/TodoDetailPage.jsx'
import TodoListPage from './pages/TodoListPage.jsx'
import { addTodo, deleteTodo, updateTodo } from './utils/todoHelpers.js'

export default function App() {
  // State utama: seluruh daftar tugas disimpan di sini, lalu dikirim ke halaman lewat props
  const [todos, setTodos] = useState(dummyTodos)
  // State notifikasi: { message, type } atau null kalau tidak ada notifikasi
  const [toast, setToast] = useState(null)

  // Notifikasi hilang sendiri setelah 3 detik
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(timer)
  }, [toast])

  function handleAdd(data) {
    setTodos(prev => addTodo(prev, data))
    setToast({ type: 'success', message: 'Tugas berhasil ditambahkan.' })
  }

  function handleUpdate(id, data) {
    setTodos(prev => updateTodo(prev, id, data))
    setToast({ type: 'success', message: 'Tugas berhasil diperbarui.' })
  }

  function handleDelete(id) {
    setTodos(prev => deleteTodo(prev, id))
    setToast({ type: 'success', message: 'Tugas berhasil dihapus.' })
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<TodoListPage todos={todos} onAdd={handleAdd} onDelete={handleDelete} />} />
        <Route path="/todo/:id" element={<TodoDetailPage todos={todos} onUpdate={handleUpdate} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}
