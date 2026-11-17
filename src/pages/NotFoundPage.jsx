import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <div className="detail-card detail-empty">
      <p>404 - Halaman tidak ditemukan.</p>
      <Link to="/" className="btn btn-blue">Ke daftar tugas</Link>
    </div>
  )
}
