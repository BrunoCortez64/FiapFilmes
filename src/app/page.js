import Titulo from "../components/titulo";

export default function Home() {
  return ( //JSX
  <>
    <nav className="bg-slate-500 p-2 flex gap-3 items-end">

      <h1 className="text-4xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
      <ul>
        <li>
          <a href="#">Favoritos</a>
        </li>
      </ul>
    </nav>

      <Titulo texto="em alta" />
      <Titulo texto="lançamentos" />

  </>
  )
}
