import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const ModificarCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
        tipoDocumento: '',
        tipoUsuario: '',
        numDocumento: '',
        departamento: '',
        ciudad: '',
        direccion: ''


    });

    const { nombre, email, password, confirmar, tipoDocumento, tipoUsuario, numDocumento, departamento, ciudad, direccion} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const modificarCuenta = async () => {
        if (password !== confirmar) {
            const msg = "Las contraseñas son diferentes.";
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
        } else if (password.length < 6) {
            const msg = "La contraseña deber ser al menos de 6 caracteres.";
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
            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password,
                tipoDocumento: usuario.tipoDocumento,
                tipoUsuario: usuario.tipoUsuario,
                numDocumento: usuario.numDocumento,
                departamento:usuario.departamento,
                ciudad: usuario.ciudad,
                direccion: usuario.direccion,
            }
            const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
            const mensaje = response.msg;

            if (mensaje === 'El usuario ya existe') {
                const msg = "El usuario ya existe.";
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
                const msg = "El usuario fue creado correctamente.";
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

                setUsuario({
                    nombre: '',
                    email: '',
                    password: '',
                    confirmar: '',
                    tipoDocumento: '',
                    tipoUsuario: '',
                    numDocumento: '',
                    departamento: '',
                    ciudad: '',
                    direccion: '',
                })
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        modificarCuenta();
    }

    return (
        <div class='hold-transition login-page'>

            <div className="login-box">
                <div className="login-logo">
                    <Link to="#"><b>MiDulceOnline</b></Link>
                </div>
                {/* /.login-logo */}
                <div className="card">

                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Modificar Usuario</p>
                        
                        <form onSubmit={onSubmit}>

                        <div className="input-group mb-3">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Nombre Completo"
                                    id="nombre"
                                    name="nombre" 
                                    value={nombre}
                                    onChange={onChange}
                                    required

                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                 />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required
                                 />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Confirmar Contraseña"
                                    id="confirmar"
                                    name="confirmar"
                                    value={confirmar}
                                    onChange={onChange}
                                    required
                                 />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                  <select class="custom-select rounded-0" 
                                       id="tipoDocumento"
                                       placeholder="Tipo Documento"
                                       name="tipoDocumento"
                                       value={tipoDocumento}
                                       onChange={onChange}
                                       required
                                  >
                                      <option>Tipo Documento</option>
                                      <option>CC</option>
                                      <option>TI</option>
                                      <option>NIT</option>
                                  </select>
                            </div>
                            
                                                      
                            <div className="input-group mb-3">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Numero Documento "
                                    id="numDocumento"
                                    name="numDocumento"
                                    value={numDocumento}
                                    onChange={onChange}
                                    required

                                  />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="" />
                                    </div>
                                </div>
                            </div>
                            
                          
                            <div class="form-group">
                                  <select class="custom-select" 
                                       id="tipoUsuario"
                                       placeholder="Tipo Usuario"
                                       name="tipoUsuario"
                                       value={tipoUsuario}
                                       onChange={onChange}
                                       required
                                  >
                                      <option>Tipo de Usuario</option>
                                      <option>CLI</option>
                                      <option>PRO</option>
                                      <option>MAS</option>
                                  </select>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Direccion "
                                    id="direccion"
                                    name="direccion"
                                    value={direccion}
                                    onChange={onChange}
                                    required

                                  />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                  <select class="custom-select rounded-0" 
                                       id="departamento"
                                       placeholder="Departamento"
                                       name="departamento"
                                       value={departamento}
                                       onChange={onChange}
                                       required
                                  >
                                      <option>Departamento</option>
                                      <option>TOLIMA</option>
                                      <option>CUNDINAMARCA</option>
                                      <option>VALLE</option>
                                  </select>
                            </div>

                            <div class="form-group">
                                  <select class="custom-select rounded-0" 
                                       id="ciudad"
                                       placeholder="Ciudad"
                                       name="ciudad"
                                       value={ciudad}
                                       onChange={onChange}
                                       required
                                  >
                                      <option>Ciudades</option>
                                      <option>IBAGUE</option>
                                      <option>BOGOTA</option>
                                      <option>CALI</option>
                                  </select>
                            </div>
  
                                                   
                            <div className="row">

                                <div className="col-6">
                                 <button type="submit" className="btn btn-primaryblock btn-primary">Modificar Usuario </button>
                                </div>

                                <div className="col-6">
                                    <Link to="/Home" class="btn btn-block btn-primary">Regresar Home</Link>
                                </div>

                                {/* /.col */}
                            </div>

                        </form>



                    </div>
                </div>
            </div>
        </div >
    )

};

export default ModificarCuenta;