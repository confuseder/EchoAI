export default function Button({ color, children }: { color: string, children: React.ReactNode }) {
  return (
    <div
      className={`px-4 flex items-center justify-center text-sm h-6 rounded-full p-2 text-white select-none hover:cursor-pointer hover:opacity-65`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  )
}
