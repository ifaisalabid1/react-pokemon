import PokeCard from './PokeCard'
import { useState } from 'react'

const PokeCardList = ({
  pokemon,
  loading,
  error,
}: {
  pokemon: any
  loading: boolean
  error: any
}) => {
  const [search, setSearch] = useState('')
  const filteredPokemon = pokemon.filter((currPokemon: any) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <section className='container max-w-5xl mt-24'>
        <h1 className='text-4xl font-bold text-center'>Pokedex App</h1>
        <p className='mt-6 text-center'>Search for a Pokemon by name</p>

        <div className='mt-6'>
          <input
            type='text'
            placeholder='Pokemon name'
            className='w-full input input-bordered'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <section className='container mt-12'>
        {!loading && (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4'>
            {filteredPokemon.map((currPokemon: any) => (
              <PokeCard key={currPokemon.id} currPokemon={currPokemon} />
            ))}
          </div>
        )}

        <div className='container flex items-center justify-center'>
          {loading && <span className='loading loading-dots loading-lg'></span>}
          {error && <p className='text-lg'>{error}</p>}
        </div>
      </section>
    </div>
  )
}

export default PokeCardList
