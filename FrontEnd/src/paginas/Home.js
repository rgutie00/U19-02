import React from 'react';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import Navbar from '../componentes/Navbar';
import SlidebarContainer from '../componentes/SlidebarContainer';
import { Link } from "react-router-dom"

const Home = () => {

    return (

        <div className="wrapper">
            <Navbar></Navbar>
            <SlidebarContainer></SlidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    ruta1={"/home"}
                
                />

                
                <section classname="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>New Orden</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <div>
                                        <Link to="#" className="small-box-footer"> Mas información <i className="fas fa-arrow-circle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer></Footer>
        </div>


    )

}

export default Home;