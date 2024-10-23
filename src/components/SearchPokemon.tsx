import { Search } from 'lucide-react'

const SearchPokemon = () => {
  return (
    <section className='container'>
      <p>Search for a Pokemon by name or using its National Pokedex number</p>

      <div className='flex items-center gap-2 mt-6'>
        <input
          type='text'
          placeholder='Name or number'
          className='w-full input input-bordered'
        />
        <button className='btn btn-square'>
          <Search size={20} />
        </button>
      </div>
    </section>
  )
}

export default SearchPokemon
