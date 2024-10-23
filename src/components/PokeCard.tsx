const PokeCard = () => {
  return (
    <div className='shadow-xl card bg-base-100'>
      <figure className='px-10 pt-10'>
        <img
          src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='items-center text-center card-body'>
        <h2 className='card-title'>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  )
}

export default PokeCard
