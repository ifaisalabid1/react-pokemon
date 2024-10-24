const PokeCard = ({ currPokemon }: any) => {
  return (
    <div className='shadow-xl card bg-base-100'>
      <figure className='px-10 pt-10'>
        <img
          src={currPokemon.sprites.other.dream_world.front_default}
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='items-center text-center card-body'>
        <h2 className='card-title'>{currPokemon.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  )
}

export default PokeCard
