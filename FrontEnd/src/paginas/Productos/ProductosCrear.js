import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SlidebarContainer from "../../componentes/SlidebarContainer";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import APIInvoke from "../../utils/APIInvoke";

const ProductosCrear = () => {

    const navigate = useNavigate();

    const [producto, setProducto] = useState({
        nombre: '',
        categoria: '',
        region: '',
        valor: '',
        cantidad: '',
                      
    });

    const { nombre, categoria, region, valor, cantidad} = producto;

    
    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const onChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }



    const crearProducto = async () => {

           const data = {
                nombre: producto.nombre,
                valor: producto.valor,
                cantidad: producto.cantidad,
                categoria: producto.categoria,
                region: producto.region
                
            }
            const response = await APIInvoke.invokePOST(`/api/productos`, data);
            const idProducto = response._id;

            if (idProducto === '') {
            const msg = "El producto no fue creado correctamente.";
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
        } else {
            navigate("/productos-crud");
            const msg = "El producto fue creado correctamente.";
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

                setProducto({
                    nombre: '',
                    categoria: '',
                    region: '',
                    valor: '',
                    cantidad: '',
                    
                })
            }
        }
    

    const onSubmit = (e) => {
        e.preventDefault();
        crearProducto();
    }

    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SlidebarContainer></SlidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Creacion de Productos"}
                    breadCrumb1={"Listado de Productos"}
                    breadCrumb2={"Creación"}
                    ruta1={"/productos-crud"}
                />

                <section classname="content">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><button type="button" className="btn  btn-block btn-primary btn-sm"> Crear Producto</button></h3>

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

                            <form onSubmit={onSubmit}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre Producto</label>
                                        <input type="text"
                                         className="form-control" 
                                         id="nombre" 
                                         placeholder="Nombre del Producto"
                                         name="nombre" 
                                         value={nombre}
                                         onChange={onChange}
                                         required
                                          />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="valor">Valor</label>
                                        <input type="text"
                                         className="form-control" 
                                         id="valor"
                                         name="valor" 
                                         value={valor}
                                         onChange={onChange}
                                         required
                                         placeholder="Valor Producto" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="cantidad">Cantidad</label>
                                        <input type="text"
                                         className="form-control"
                                         id="cantidad"
                                         name="cantidad" 
                                         value={cantidad}
                                         onChange={onChange}
                                         required
                                         placeholder="Cantidad" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="categoria">Categoria</label>
                                        <select class="custom-select rounded-0"
                                            id="categoria"
                                            placeholder="Categoria"
                                            name="categoria"
                                            value={categoria}
                                            onChange={onChange}
                                            required

                                        >
                                            <option>Categoria</option>
                                            <option>DULCES</option>
                                            <option>POSTRES</option>
                                            <option>BISCOCHOS</option>
                                            <option>GALLETAS</option>
                                        </select>

                                        <div className="form-group">
                                            <label htmlFor="region">Region</label>
                                            <select class="custom-select rounded-0"
                                                id="region"
                                                placeholder="Region"
                                                name="region"
                                                value={region}
                                                onChange={onChange}
                                                required

                                            >
                                                <option>Region</option>
                                                <option>CARIBE</option>
                                                <option>ANDINA</option>
                                                <option>PACIFICA</option>
                                                <option>ORINOQUIA</option>
                                                <option>AMAZONIA</option>
                                                
                                            </select>

                                        </div>
                                       </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Crear</button>
                                </div>
                            </form>



                        </div>

                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>


    );
}


export default ProductosCrear;
