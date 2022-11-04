import React from "react";
import { Link } from "react-router-dom"

const Menus = () => {

    return (

    
    <nav className="mt-2">
         <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
                <li className="nav-item">
                    <Link to={"/Home"} className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      
                        <p>
                             Inicio 
                            <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                   
                </li>

                
                <li className="nav-item">
                    <Link to={"/modificar-cuenta"} className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      
                        <p>
                             Usuario 
                            <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                   
                </li>
                
                <li className="nav-item">
                    <Link to={"/productos-crud"} className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      
                        <p>
                             Productos
                            <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                    
                </li>
                
                
                
            </ul>
    </nav>

    );

}

export default Menus;