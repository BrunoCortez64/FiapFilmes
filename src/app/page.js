
import CardFilm from "@/components/CardFilm";
import Titulo from "../components/titulo";

export default function Home() {
    //mock
    const filmes = [

      {
        id: 1,
        titulo: "Star Wars",
        nota: 9.5,
        poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg"
  
      },
      {
        id: 2,
        titulo: "Barbie",
        nota: 9.2,
        poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
  
      }
    ] 
    
    

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

      <Titulo texto="Em alta" />

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilm filme={filme} />)}

      </section>


      <Titulo texto="Lançamentos" />

  </>
  )
}
