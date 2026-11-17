import { useState } from 'react'
import Modal from './Modal.jsx'
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '../data/options.js'

const formKosong = {
  title: '',
  description: '',
  status: 'to-do',
  priority: 'low',
  deadline: '',
}

// Modal form yang dipakai dua kali:
//   mode="add"    -> judul "Tambah Todo", form kosong
//   mode="update" -> judul "Update Todo", form terisi dari initialValues
export default function TodoFormModal({ mode, initialValues, onSubmit, onClose }) {
  const isUpdate = mode === 'update'

  const [form, setForm] = useState(() => {
    if (!initialValues) return formKosong
    const { title, description, status, priority, deadline } = initialValues
    return { title, description, status, priority, deadline }
  })
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setForm(prev => ({ ...prev, [name]: value }))
    // hapus pesan error field ini begitu pengguna mulai memperbaikinya
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const data = {
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
    }

    const newErrors = {}
    if (!data.title) newErrors.title = 'Judul wajib diisi.'
    if (!data.deadline) newErrors.deadline = 'Deadline wajib diisi.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit(data)
  }

  return (
    <Modal title={isUpdate ? 'Update Todo' : 'Tambah Todo'} onClose={onClose} closeOnBackdrop={false}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="todo-title">Judul</label>
          <input
            id="todo-title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            aria-invalid={Boolean(errors.title)}
            autoFocus
          />
          {errors.title && <p className="field-error" role="alert">{errors.title}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="todo-description">Deskripsi</label>
          <textarea
            id="todo-description"
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="todo-status">Status</label>
            <select id="todo-status" name="status" value={form.status} onChange={handleChange}>
              {STATUS_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="todo-priority">Prioritas</label>
            <select id="todo-priority" name="priority" value={form.priority} onChange={handleChange}>
              {PRIORITY_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="todo-deadline">Deadline</label>
          <input
            id="todo-deadline"
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            aria-invalid={Boolean(errors.deadline)}
          />
          {errors.deadline && <p className="field-error" role="alert">{errors.deadline}</p>}
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-red" onClick={onClose}>Batal</button>
          <button type="submit" className="btn btn-blue">{isUpdate ? 'Update' : 'Tambah'}</button>
        </div>
      </form>
    </Modal>
  )
}
