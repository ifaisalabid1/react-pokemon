import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import Header from './components/Header'
import SearchPokemon from './components/SearchPokemon'
import PokeCardList from './components/PokeCardList'
import Pagination from './components/Pagination'
import { useEffect, useState } from 'react'

const App = () => {
  const [allPokemon, setAllPokemon] = useState<singlePokemon[]>([])
  const [loading, setLoading] = useState(false)
  interface singlePokemon {
    url: string
    name: string
  }

  const API = 'https://pokeapi.co/api/v2/pokemon/?limit=20'

  const fetchAllPokemon = async () => {
    setLoading(true)

    try {
      const res = await fetch(API)
      const allPokemonData = await res.json()

      const singlePokemonData = allPokemonData.results.map(
        async (singlePokemon: singlePokemon) => {
          const res = await fetch(singlePokemon.url)
          const singlePokemonData = await res.json()
          return singlePokemonData
        }
      )

      const singlePokemonRes = await Promise.all(singlePokemonData)

      setAllPokemon(singlePokemonRes)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPokemon()
  })

  return (
    <>
      <Header />
      <SearchPokemon />
      <PokeCardList allPokemon={allPokemon} />
      <Pagination />
    </>
  )
}

export default App
