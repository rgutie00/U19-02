import React from "react";
import { Link } from "react-router-dom"
import Menus from "./Menus";
import Logo from "../../node_modules/admin-lte/dist/img/AdminLTELogo.png";


const SlidebarContainer = () => {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={"/home"} className="brand-link">
                <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">MidulceOnline</span>
            </Link>
            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        &nbsp;
                    </div>

                    <div className="info">
                        <Link to="/home" className="d-block">Menu Principal</Link>
                    </div>
                </div>

              
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Buscar Opcion" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>

                <Menus></Menus>



            </div>
        </aside>

    );

}

export default SlidebarContainer;