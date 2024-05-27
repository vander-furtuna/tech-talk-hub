'use client'

import { useState } from 'react'

import { Arrow } from '@/assets/arrow'

import { Link } from './Link'

const links = [
  {
    title: 'MPA',
    href: 'https://tech-talk-mpa.vercel.app/',
  },
  {
    title: 'SPA',
    href: 'https://tech-talk-spa.vercel.app/',
  },
  {
    title: 'SSR',
    href: 'https://tech-talk-ssr.vercel.app/',
  },
]

export function LinksContainer() {
  const [x, setX] = useState(0)
  return (
    <div className="flex items-center justify-center gap-8 w-full relative">
      <div className="flex items-center justify-center w-fit gap-8 lg:gap-16">
        {links.map(({ title, href }) => (
          <Link
            href={href}
            key={href}
            onMouseOver={(event) =>
              setX(
                event.currentTarget.offsetLeft +
                  event.currentTarget.offsetWidth +
                  16,
              )
            }
            onMouseOut={() => setX(0)}
          >
            {title}
          </Link>
        ))}
      </div>
      <div
        className="w-fit absolute -bottom-4 transition-all duration-300 ease-in-out"
        style={{
          right: `calc(100% - ${x}px)`,
        }}
      >
        <Arrow />
      </div>
    </div>
  )
}
