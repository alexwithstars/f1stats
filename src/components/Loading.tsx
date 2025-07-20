import { JSX } from 'react'
import './Loading.css'

export function Loading (): JSX.Element {
  return (
    <div className='loading'>
      <span style={{ '--delay': '0s' } as React.CSSProperties} />
      <span style={{ '--delay': '0.3s' } as React.CSSProperties} />
      <span style={{ '--delay': '0.6s' } as React.CSSProperties} />
    </div>
  )
}
