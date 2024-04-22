import Button from "../shared/components/Button"
import Link from "../shared/components/Link"
import TextInput from "../shared/components/TextInput"
import { useAppDispatch } from "../shared/hooks/reduxHooks"
import { switchColorMode } from "../redux/themeReducer"
import { useTextInput } from "../shared/hooks/useTextInput"
import ModalBox from "../shared/components/ModalBox"
import { useState } from "react"

const Home = () => {
  const [state, handleChange] = useTextInput('')
  const [isVisible, setVisibility] = useState(false)
  const dispatch = useAppDispatch()
  const setColorMode = () => dispatch(switchColorMode())
  const handleOpenModal = () => {
    console.log('opening modal')
    setVisibility(true)
  }
  const handleCloseModal = () => {
    setVisibility(false)
  }
  return (<>
    <h1>Koti</h1>
    <Link url="http://www.facebook.com">Home</Link>
    <br />
    <br />
    <Button
      name={"Click me!"}
      onClick={setColorMode}
      isLogo={true}
      logo="fa fa-solid fa-info"
    />
    <Button
      name={"No! Me!"}
      onClick={handleOpenModal}
      isLogo={true}
      logo="fa fa-solid fa-key"
    />
      {isVisible &&
      <ModalBox
        isVisible={isVisible}
        switchVisibility={handleCloseModal}
        hasCloseButton={true}
        >
        <TextInput
          handleChange={handleChange}
          label="Text field"
          placeholder="Placeholder"
          inputState={state}
          isLabel={true}
          id="testingInput"
        />    
      </ModalBox>}
  </>)
}

export default Home