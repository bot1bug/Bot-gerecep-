export default function ErrorCard({message, color = 'bg-green-500'}) {
  return (
    <div className={`p-3 ${color} rounded-md text-rose-50 my-3`}>{message}</div>
  )
}
