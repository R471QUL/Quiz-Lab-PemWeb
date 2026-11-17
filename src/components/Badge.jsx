// Label berwarna untuk status dan prioritas, contoh: "in progress" -> kelas "badge-in-progress"
export default function Badge({ value }) {
  const slug = value.replace(/\s+/g, '-')
  return <span className={`badge badge-${slug}`}>{value}</span>
}
