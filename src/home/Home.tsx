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
  const handleSwitchVisibility = () => {
    setVisibility(state => !state)
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
      onClick={handleSwitchVisibility}
      isLogo={true}
      logo="fa fa-solid fa-info"
    />
    <TextInput
      handleChange={handleChange}
      label="Text field"
      placeholder="Placeholder"
      inputState={state}
      isLabel={true}
      id="testingInput"/>
      <ModalBox isVisible={isVisible} switchVisibility={handleSwitchVisibility}/>
  </>)
}

export default Home