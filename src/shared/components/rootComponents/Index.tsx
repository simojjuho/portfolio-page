import { RouterProvider } from 'react-router-dom'
import router from '../../../router.tsx'
import { setToLs } from '../../utils/localStorageActions.ts'
import * as themes from '../../theme/schema.json'

const Index = () => {
  setToLs('all-themes', themes.data);
  return(
    <RouterProvider  router={router}/>
  )
}

export default Index