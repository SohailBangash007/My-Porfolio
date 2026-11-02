import { useEffect, useState } from 'react'

/** Types out an array of phrases, pauses, deletes, repeats. */
export default function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 38, pause = 1500 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words?.length) return
    const word = words[index % words.length]

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => {
        setText((prev) => (deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)))
      },
      deleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}
