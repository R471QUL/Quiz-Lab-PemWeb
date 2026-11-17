// Fungsi-fungsi kecil untuk mengubah daftar tugas.
// Semuanya "murni": tidak mengubah array lama, tapi mengembalikan array baru
// (aturan React State: jangan memodifikasi state secara langsung).

export function getNextId(todos) {
  return todos.length === 0 ? 1 : Math.max(...todos.map(todo => todo.id)) + 1
}

export function addTodo(todos, data) {
  return [...todos, { ...data, id: getNextId(todos) }]
}

export function updateTodo(todos, id, data) {
  return todos.map(todo => (todo.id === id ? { ...todo, ...data, id: todo.id } : todo))
}

export function deleteTodo(todos, id) {
  return todos.filter(todo => todo.id !== id)
}
