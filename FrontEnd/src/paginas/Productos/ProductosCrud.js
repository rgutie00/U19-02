import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SlidebarContainer from "../../componentes/SlidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

import { Link } from "react-router-dom";

const ProductosCrud = () => {

    const [productos, setProductos] = useState ([]);
    const cargarProductos = async () => {

        const response = await APIInvoke.invokeGET('/api/productos/');
        setProductos(response.productos) 
    }

    useEffect ( () => {
        cargarProductos();

    })

    
   
    
    const eliminarProductos = async (e, idProducto) => {
        e.preventDefault();
        console.log (idProducto)
        const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`);

        if (response.msg === 'Producto eliminado') {
            const msg = "El producto fue borrado correctamente.";
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
            cargarProductos();
        } else {
            const msg = "El producto no fue borrado correctamente.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }

    }


    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SlidebarContainer></SlidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Listado de Productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    ruta1={"/home"}
                />

                <section classname="content">
                    <section class="content">
                        <div className="card">
                            <div className="card-header">
                            <h3 className="card-title"><Link to={"/productos-crear"} className="btn  btn-block btn-primary btn-sm"> Crear Producto</Link></h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '10%' }}>Id</th>
                                            <th style={{ width: '45%' }}>Nombre</th>
                                            <th style={{ width: '20%' }}>Valor</th>
                                            <th style={{ width: '15%' }}>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {

                                            productos.map((
                                                item => 
                                                <tr key={item.id}>
                                                   <td>{item._id}</td>
                                                   <td>{item.nombre}</td>
                                                   <td>{item.valor}</td>
                                                   <td>
                                                     <Link to={`/productos-editar/${item._id}@${item.nombre}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp; 
                                              
                                                      <button onClick={(e) => eliminarProductos(e, item._id)} className="btn btn-sm btn-danger">Borrar</button>
                                                   </td>
                                               </tr>
                                            ))
                                        }
                                        
                                        
                                    </tbody>
                                </table>







                            </div>

                        </div>

                    </section>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductosCrud;
