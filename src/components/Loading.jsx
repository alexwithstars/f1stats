import './Loading.css'

export function Loading () {
  return (
    <div className='loading'>
      <span style={{ '--delay': '0s' }} />
      <span style={{ '--delay': '0.3s' }} />
      <span style={{ '--delay': '0.6s' }} />
    </div>
  )
}
