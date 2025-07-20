import './SectionHeader.css'

interface SectionHeaderProps {
  title: string
  backgroundUrl: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, backgroundUrl }) => {
  const cssBackground = `url(${backgroundUrl})`
  return (
    <header className='header'>
      <div className='header-background' style={{ backgroundImage: cssBackground }} />
      <h1 className='header-title'>{title}</h1>
    </header>
  )
}
