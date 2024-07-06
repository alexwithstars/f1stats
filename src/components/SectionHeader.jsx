import './SectionHeader.css'

export function SectionHeader ({ title, backgroundUrl }) {
  const cssBackground = `url(${backgroundUrl})`
  return (
    <header className='header'>
      <div className='header-background' style={{ backgroundImage: cssBackground }} />
      <h1 className='header-title'>{title}</h1>
    </header>
  )
}
