/* eslint-disable no-unused-vars */
import './navbar.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Sobre Mi', href: '#' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Skills', href: '#Skills' }
  ]

  return (
    <header className='text-white'>
      <nav
        className='flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8'
        aria-label='Global'
      >
        <a
          href='#'
          className='-m-1.5 p-1.5 flex items-center justify-center'
        >
          <span className='sr-only'>Your Company</span>
          <picture className='logo'>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              className='p-0 m-0'
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: 'linear',
                scale: {
                  type: 'spring',
                  damping: 10,
                  stiffness: 100
                }
              }}
            >
              Geronimo Gambuli
            </motion.h1>
          </picture>
        </a>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon
              className='w-6 h-6'
              aria-hidden='true'
            />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-base font-semibold hover:text-[#646cff] leading-6'
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-300/10'>
          <div className='flex items-center justify-between'>
            <a
              href='#'
              className='-m-1.5 p-1.5'
            >
              <span className='sr-only'>Your Company</span>

              <p className='text-sm'>Geronimo Gambuli</p>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon
                className='w-6 h-6'
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='flow-root mt-6'>
            <div className='-my-6 divide-y divide-gray-300/10'>
              <div className='py-6 space-y-2'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-white hover:text-[#646cff] leading-7'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
