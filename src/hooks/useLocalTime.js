import { useEffect, useState } from 'react'

/** Live clock for a given IANA timezone. */
export default function useLocalTime(timeZone = 'Asia/Karachi') {
  const format = () =>
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(new Date())

  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])

  return time
}
