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
  interface currPokemon {
    name: string
    url: string
  }
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState<any[]>([])
  const [error, setError] = useState<any>(null)
  const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

  const fetchPokemonData = async () => {
    setLoading(true)
    try {
      const res = await fetch(API)
      const data = await res.json()

      const currPokemonData = data.results.map(
        async (currPokemon: currPokemon) => {
          const res = await fetch(currPokemon.url)
          const data = await res.json()
          return data
        }
      )

      const pokemonData = await Promise.all(currPokemonData)

      setPokemon(pokemonData)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])
  return (
    <>
      <Header />
      <SearchPokemon />
      <PokeCardList pokemon={pokemon} loading={loading} error={error} />
      <Pagination />
    </>
  )
}

export default App
