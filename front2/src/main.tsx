import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from "./routes/Home/index.tsx"
import Error from "./routes/Error/index.tsx"
import Chamados from "./routes/Chamados/index.tsx"
import Contato from "./routes/Contato/index.tsx"
import Pesquisa from "./routes/Pesquisa/index.tsx"
import Sobre from "./routes/Sobre/index.tsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/> , children:[
    {path:"/",element:<Home/>},
    {path:"/chamados",element:<Chamados/>},
    {path:"/Contato",element:<Contato/>},
    {path:"/Pesquisa", element:<Pesquisa/>},
    {path:"/Sobre", element:<Sobre/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
