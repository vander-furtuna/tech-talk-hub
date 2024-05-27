import { LinksContainer } from '@/components/LinksContainer'

export default function Home() {
  return (
    <section className="flex flex-col gap-8 items-center justify-start size-full">
      <h1 className="title">Tech Talk Hub</h1>
      <strong className="text-white font-normal w-72 text-center">
        Conheça as 3 principais formas de desenvolvimento web
      </strong>
      <article className="flex size-full items-center justify-center">
        <LinksContainer />
      </article>
    </section>
  )
}
