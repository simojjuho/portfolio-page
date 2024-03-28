
const setToLs = (key: string, value: object): void => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

const getFromLs = (key: string): string | null => {
  const data = window.localStorage.getItem(key)
  if(data) return JSON.parse(data)

  return null
}

export { setToLs, getFromLs }