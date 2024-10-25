import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
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
  const [error, setError] = useState<Error | null>(null)
  const [page, setPage] = useState(1)
  const [totalPokemon, setTotalPokemon] = useState(0)

  const limit = 20
  const totalPages = Math.ceil(totalPokemon / limit)
  const offset = limit * (page - 1)

  const API = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

  const fetchPokemonData = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API)
      const data = await res.json()

      if (totalPokemon === 0) setTotalPokemon(data.count)

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
      setError(error as Error)
    }
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [page])

  return (
    <>
      <PokeCardList pokemon={pokemon} loading={loading} error={error} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default App
