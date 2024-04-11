import { ChangeEvent } from "react"

interface TextInputProps {
  label: string
  placeholder: string
  inputState: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  isLabel?: boolean
  id: string
}

const TextInput = ({
  label,
  placeholder,
  inputState,
  handleChange,
  isLabel = false,
  id
}: TextInputProps) => {
  return (
    <div
      className="m-2 flex flex-col text-lg"
    >
      {isLabel && <label
            className="mb-1"
            htmlFor={id}
            >
              {label}
            </label>}
      <input
        id={id}
        className="w-80 transition duration-200 ease-in-out focus:bg-orange-100 focus:scale-105 text-center"
        value={inputState}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput