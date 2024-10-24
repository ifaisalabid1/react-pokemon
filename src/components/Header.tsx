import { motion, AnimatePresence } from 'framer-motion'
import { AlignJustify, MoveLeft } from 'lucide-react'
import { useState } from 'react'
import { getPokemonIndex } from '../utils'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <section className='relative py-6'>
      <div className='container flex items-center gap-4'>
        <button onClick={toggleMenu}>
          <AlignJustify size={32} />
        </button>

        <h1 className='text-3xl font-bold'>Pokedex</h1>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className='absolute w-full h-[100dvh] top-0 bg-neutral text-neutral-content z-50 container py-6'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className='flex items-center gap-4'>
              <button onClick={toggleMenu}>
                <MoveLeft size={32} />
              </button>

              <h1 className='text-3xl font-bold'>Pokedex</h1>
            </div>

            <nav className='mt-6'>
              <ul>
                <li>
                  <button>{getPokemonIndex(12)}</button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Header
