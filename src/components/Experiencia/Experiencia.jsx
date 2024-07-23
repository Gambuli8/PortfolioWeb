export default function Experiencia() {
  const empresas = [
    {
      empresa: 'Tinto Technology',
      proyecto: 'DEDALO Triatlón',
      description: 'Dédalo Triatlón, te permite iniciar sesión, buscar atletas y acceder a perfiles detallados con logros y estadísticas.',
      link: 'https://dedalotri.org',
      status: 'Presente'
    },
    {
      proyecto: 'Alimecon',
      empresa: 'WE ROCK',
      status: 'Sep-2023 - Dic-2023',
      description:
        'Responsable de un backoffice de Alimecon que brinda a los administradores un control total sobre los pedidos y el inventario. Desde la plataforma, los responsables pueden visualizar fácilmente los pedidos de cada empleado de la empresa, accediendo a información detallada sobre los platos solicitados. La herramienta permite configurar los horarios de realización de pedidos, asegurando una gestión eficiente del servicio. Además, los administradores pueden supervisar el stock de cada plato en tiempo real, facilitando la planificación de la producción y evitando posibles faltantes.'
    }
  ]
  return (
    <div
      id='experiencia'
      className='flex flex-col items-start justify-center mt-32 mb-10 ml-24'
    >
      <h2 className='text-[#ffda9e] text-[40px] mb-10'>Experiencia</h2>
      {empresas.map((job, i) => (
        <ol
          key={i}
          className='relative ml-10 border-gray-200 border-s dark:border-gray-700'
        >
          <li className='mb-10 ms-6'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className=' w-4 h-4 text-[#646cff] dark:text-blue-300'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  stroke='none'
                  d='M0 0h24v24H0z'
                  fill='none'
                />
                <path
                  d='M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z'
                  strokeWidth='0'
                  fill='currentColor'
                />
              </svg>
            </span>
            <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-300 dark:text-white'>
              {job.empresa}
              {job.status ? <span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3'>{job.status}</span> : null}
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{job.proyecto}</time>
            <p className='mb-4 text-base font-normal text-gray-500 text-balance dark:text-gray-400'>{job.description}</p>
            {job.link ? (
              <a
                href={job.link}
                target='_blank'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#646cff] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 me-2.5'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path
                    stroke='none'
                    d='M0 0h24v24H0z'
                    fill='none'
                  />
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
                  <path d='M11 13l9 -9' />
                  <path d='M15 4h5v5' />
                </svg>{' '}
                Ver Pagina
              </a>
            ) : null}
          </li>
        </ol>
      ))}
    </div>
  )
}
