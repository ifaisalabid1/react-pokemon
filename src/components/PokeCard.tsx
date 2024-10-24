const PokeCard = ({ currPokemon }: any) => {
  return (
    <div className='shadow-xl card bg-base-100'>
      <figure>
        <img
          src={currPokemon.sprites.other.dream_world.front_default}
          alt={currPokemon.name}
        />
      </figure>
      <div className='card-body'>
        <h2 className='capitalize card-title'>{currPokemon.name}</h2>

        <div className='mt-6'>
          {currPokemon.stats.map((pokemonStat: any) => (
            <div
              className='flex items-center gap-4 text-sm'
              key={pokemonStat.stat.name}
            >
              <p className='my-2 capitalize w-[30%]'>{pokemonStat.stat.name}</p>
              <p className='w-[10%]'>{pokemonStat.base_stat}</p>
              <progress
                className='progress progress-primary w-[60%]'
                value={pokemonStat.base_stat}
                max='100'
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokeCard
