import { ComponentProps } from 'react'

export function Link({ children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className="block text-white font-bold text-4xl sm:text-7xl transition-all duration-300 px-3 py-1 hover:opacity-100 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-white before:to-white/70 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:rounded-lg before:opacity-0 hover:before:opacity-100 before:transition-all hover:text-black before:duration-300"
      rel="noreferer"
      target="_blank"
    >
      {children}
    </a>
  )
}
