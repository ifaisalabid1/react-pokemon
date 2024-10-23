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
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const baseUrl = 'https://pokeapi.co/api/v2'
  const suffix = '/pokemon/' + selectedPokemon
  const finalUrl = baseUrl + suffix

  return (
    <>
      <Header />
      <SearchPokemon />
      <PokeCardList />
      <Pagination />
    </>
  )
}

export default App
