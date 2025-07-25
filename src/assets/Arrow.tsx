import { SVG } from '../types/types.js'

export const Arrow: SVG = (options) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...options} width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 9l6 6l6 -6' />
    </svg>
  )
}
