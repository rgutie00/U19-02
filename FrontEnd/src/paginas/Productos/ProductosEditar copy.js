import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SlidebarContainer from "../../componentes/SlidebarContainer";
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import APIInvoke from "../../utils/APIInvoke";

const ProductosEditar = () => {

    const navigate = useNavigate();

    const { idProducto } = useParams();
    let arreglo = idProducto.split('@');
    const nombreProducto = arreglo[1];
    const categoriaProducto = arreglo[2];
    const regionProducto = arreglo[3];
    const valorProducto = arreglo[4];
    const cantidadProducto = arreglo[5];



    

    const [producto, setProducto] = useState({
        nombre: nombreProducto,
        categoria: categoriaProducto,
        region: regionProducto,
        valor: valorProducto,
        cantidad: cantidadProducto
                     
    });

    const { nombre } = producto;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const onChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const editarProducto = async () => {
        let arreglo = idProducto.split('@');
        const idProducto = arreglo[0];

        const data = {
            nombre: producto.nombre
        }

        const response = await APIInvoke.invokePUT(`/api/productos/${idProducto}`, data);
        const idProductoEditado = response.producto._id;

        if (idProductoEditado !== idProducto) {
            const msg = "El producto no fue editado correctamente.";
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
            const msg = "El producto fue editado correctamente.";
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
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editarProducto();
    }

    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SlidebarContainer></SlidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Editar Productos"}
                    breadCrumb1={"Listado de Productos"}
                    breadCrumb2={"Edición"}
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


export default ProductosEditar;
