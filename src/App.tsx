import { RouterProvider } from "react-router-dom"

import router from "./router"
import { useAppSelector } from "./shared/hooks/reduxHooks"
import Carousel from "./shared/components/carousel/Carousel"


const App = () => {
  const theme = useAppSelector(store => store.theme.colorMode)
  const classes = `${theme} h-fit min-h-screen  dark:bg-gray-700 `
  return (
    <div className={`${classes} overflow-x-hidden bg-primary-dark relative`}>
      <RouterProvider  router={router}/>
      <Carousel />
    </div>
  )
}

export default App