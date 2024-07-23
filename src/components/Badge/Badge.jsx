export function BadgeGreen(text) {
  return (
    <div>
      <span className='bg-green-100 w-8 h-auto text-green-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>{text}</span>
    </div>
  )
}

export function BadgePurpe(text) {
  return (
    <div>
      <span className='bg-purple-100 w-12 h-auto text-purple-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'>{text}</span>
    </div>
  )
}
