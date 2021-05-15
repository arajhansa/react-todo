import {useEffect, useRef, useState} from "react";

export default function useLocalStorageState(key, initialState, {
  serialize = JSON.stringify,
  deserialize = JSON.parse
} = {}) {

  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key)
    if (storedState) return deserialize(storedState)
    return typeof initialState === "function" ? initialState() : initialState
  })

  const keyRef = useRef(key)

  useEffect(() => {
    localStorage.setItem(key, serialize(state))
    if (keyRef.current !== key) {
      localStorage.removeItem(keyRef.current)
    }
    keyRef.current = key
  }, [key, state, serialize])

  return [state, setState]
}