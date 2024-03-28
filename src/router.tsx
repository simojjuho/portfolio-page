import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Resume from "./cv/resume";
import Contact from "./contact/Contact";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'cv',
        element: <Resume/>
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]}
])

export default router