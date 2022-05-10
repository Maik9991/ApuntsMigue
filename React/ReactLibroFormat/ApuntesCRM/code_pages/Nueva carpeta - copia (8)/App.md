~~~js
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../src/layouts/Layouts'
import Inicio from '../src/paginas/Inicio'
import  NuevoCliente from '../src/paginas/NuevoCliente'
import EditarCliente from '../src/paginas/EditarCliente'
import VerCliente from '../src/paginas/VerCliente'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
           
           <Route path="/clientes" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="nuevo" element={<NuevoCliente />}/>
              <Route path="editar/:id" element={<EditarCliente />}/>
              <Route path=":id" element={<VerCliente />}/>
           </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
~~~