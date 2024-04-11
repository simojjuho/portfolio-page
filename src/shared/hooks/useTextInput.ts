import { useState } from "react"


const useTextInput = (initialState: string) => {
  const [state, setState] = useState<string>(initialState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }
  const clear = () => {
    setState('')
  }

  return [state, handleChange, clear] as const
}

export { useTextInput }