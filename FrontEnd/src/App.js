import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import ModificarCuenta from './paginas/auth/ModificarCuenta';
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import ProductosCrud from './paginas/Productos/ProductosCrud';
import ProductosCrear from './paginas/Productos/ProductosCrear';
import ProductosEditar from './paginas/Productos/ProductosEditar';



function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/modificar-cuenta" exact element={<ModificarCuenta/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/productos-crud" exact element={<ProductosCrud/>}/>
          <Route path="/productos-crear" exact element={<ProductosCrear/>}/>
          <Route path="/productos-editar" exact element={<ProductosEditar/>}/>
          
          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
