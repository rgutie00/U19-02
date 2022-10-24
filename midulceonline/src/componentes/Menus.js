import React from "react";
import { Link } from "react-router-dom"

const Menus = () => {

    return (

       
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
                <li className="nav-item">
                    <Link to={"#"} className="nav-link">
                    
                        <i className="nav-icon fas fa-person" />
                      
                        <p>
                            Usuario Proveedor
                            <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"../../index.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Modificar Perfil</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"../../index2.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Registrar Productos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"../../index3.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Reporte de Productos</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                
                <li className="nav-item">
                    <Link to={"#"} className="nav-link">
                        <i className="nav-icon fas fa-person" />
                        <p>
                            Usuario Cliente
                            <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"../../index.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Modificar Perfil</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"../../index2.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Consultar Pedidos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"../../index3.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Reporte Pedido</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                
                <li className="nav-item">
                    <Link to={"#"} className="nav-link">
                        <i className="nav-icon fas " />
                        <p>
                            Usuario Master
                            <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"../../index.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Consultar Usuarios</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"../../index2.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Directorio Productos</p>
                            </Link>
                        </li>
                      </ul>
                </li>
                
                
                                               
                <li className="nav-item">
                    <Link to={"#"} className="nav-link">
                        <i className="nav-icon fas fa-search" />
                        <p>
                            Buscar Productos
                            <i className="fas fa-angle-left right" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"../search/simple.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Region</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"../search/enhanced.html"} className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Categorias</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                
            </ul>
        </nav>


    );

}

export default Menus;