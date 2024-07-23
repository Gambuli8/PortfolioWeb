export default function Footer() {
  return (
    <footer className='mt-4 text-white rounded-lg shadow dark:bg-gray-900'>
      <hr className='my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2024{' '}
        <a
          href='https://flowbite.com/'
          className='hover:underline'
        >
          Geronimo Gambuli™
        </a>
      </span>
    </footer>
  )
}
