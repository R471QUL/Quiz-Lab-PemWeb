// Data dummy. Atribut mengikuti ketentuan tugas: id, title, description, priority, deadline, status.
// Nanti saat pertemuan REST API, data ini diganti dengan hasil fetch ke /api/todos.
export const dummyTodos = [
  {
    id: 1,
    title: 'Mengerjakan Proyek Computer Vision',
    description: 'Menyelesaikan proyek akhir computer vision tentang deteksi penggunaan helm',
    priority: 'high',
    deadline: '2026-10-11',
    status: 'in progress',
  },
  {
    id: 2,
    title: 'Mempelajari Dasar Zustand',
    description: 'Memahami konsep store, state, dan action pada Zustand untuk mengelola state di React.',
    priority: 'low',
    deadline: '2026-11-25',
    status: 'in progress',
  },
  {
    id: 3,
    title: 'Membuat Website Portfolio',
    description: 'Membuat website portofolio responsif yang berisi profil, kemampuan, dan proyek.',
    priority: 'low',
    deadline: '2026-10-20',
    status: 'in progress',
  },
  {
    id: 4,
    title: 'Mempelajari React Hooks',
    description: 'Mempelajari useState, useEffect, dan custom hook beserta contoh penggunaannya.',
    priority: 'low',
    deadline: '2026-10-11',
    status: 'to-do',
  },
]
