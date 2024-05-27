import { useEffect, useState } from 'react'
export function useUrl () {
  const [destination, setDestination] = useState(window.location.pathname)

  useEffect(() => {
    const updateDestination = (e) => {
      setDestination(new URL(e.destination.url).pathname)
    }
    window.navigation.addEventListener('navigate', updateDestination)
    return () => {
      window.navigation.removeEventListener('navigate', updateDestination)
    }
  }, [])
  return destination
}
