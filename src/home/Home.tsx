import Button from "../shared/components/Button"
import Link from "../shared/components/Link"
import TextInput from "../shared/components/TextInput"
import { useAppDispatch } from "../shared/hooks/reduxHooks"
import { switchColorMode } from "../redux/themeReducer"
import { useTextInput } from "../shared/hooks/useTextInput"

const Home = () => {
  const [state, handleChange] = useTextInput('')
  const dispatch = useAppDispatch()
  const setColorMode = () => dispatch(switchColorMode())
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
      onClick={setColorMode}
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
  </>)
}

export default Home