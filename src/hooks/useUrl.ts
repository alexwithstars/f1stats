import { useEffect, useState } from 'react'

export function useUrl (): string {
  const [destination, setDestination] = useState<string>(window.location.pathname)

  useEffect(() => {
    if (window?.navigation === undefined) return
    const updateDestination = (e: NavigateEvent): void => {
      setDestination(new URL(e.destination.url).pathname)
    }
    window?.navigation?.addEventListener('navigate', updateDestination)
    return () => {
      window?.navigation?.removeEventListener('navigate', updateDestination)
    }
  }, [])
  return destination
}
