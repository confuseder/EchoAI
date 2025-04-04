export default function Button({ color, children, onClick }: { color: string, children: React.ReactNode, onClick?: () => void }) {
  return (
    <div
      className={`px-4 flex items-center justify-center text-sm h-6 rounded-full p-2 text-white select-none hover:cursor-pointer hover:opacity-65`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
