import { useEffect, useState } from 'react'
import { getSessions } from '../services/f1api'

export function useSessions ({ meeting }) {
  const [sessions, setSessions] = useState([])
  useEffect(() => {
    const getMeetingSessions = async () => {
      const data = await getSessions(meeting.meeting_key)
      setSessions(data)
    }
    if (meeting) {
      getMeetingSessions()
    }
    return () => setSessions([])
  }, [])

  return sessions
}
