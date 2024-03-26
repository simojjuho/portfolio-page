import { RouterProvider } from "react-router-dom"

import router from "./router"
import NavBar from "./shared/navbar/NavBar"


const App = () => {
  return (
    <div>
      <NavBar />
      <RouterProvider  router={router}/>
    </div>
  )
}

export default App