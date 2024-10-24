import PokeCard from './PokeCard'

const PokeCardList = ({
  pokemon,
  loading,
  error,
}: {
  pokemon: any
  loading: boolean
  error: any
}) => {
  return (
    <section className='container mt-12'>
      {!loading && (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4'>
          {pokemon.map((currPokemon: any) => (
            <PokeCard key={currPokemon.id} currPokemon={currPokemon} />
          ))}
        </div>
      )}

      <div className='container flex items-center justify-center'>
        {loading && <span className='loading loading-dots loading-lg'></span>}
        {error && <p className='text-lg'>{error}</p>}
      </div>
    </section>
  )
}

export default PokeCardList
