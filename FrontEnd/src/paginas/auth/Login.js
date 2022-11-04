import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const Login = () => {

    //para redireccionar de un componente a otro
    const navigate = useNavigate();

    //definimos el estado inicial de las variables
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("email").focus();
    }, [])

    const iniciarSesion = async () => {
        if (password.length < 6) {
            const msg = "La contraseña debe ser al menos de 6 caracteres.";
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
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST('/api/auth', data);
            console.log(response);
            const mensaje = response.msg;

            if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta') {
                const msg = "No fue posible iniciar la sesión verifique los datos ingresados.";
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
                //obtenemos el token de acceso jwt
                console.log(response);
                const jwt = response.token; 
                const tipoUsuario = response.tipoUsuario;
                

                //guardamos el token en el localstorage
                localStorage.setItem('token', jwt);
                localStorage.setItem('tipoUsuario', tipoUsuario);
                
                

                //redireccionamos al home la pagina principal
                navigate("/home");
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
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
                        <p className="login-box-msg">Iniciar Sesion</p>
                        
                        <form onSubmit={onSubmit}>

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
                            <div className="row">

                                <div className="col-6">
                                 <button type="submit" className="btn btn-primaryblock btn-primary">Iniciar </button>
                                </div>

                                <div className="col-6">
                                    <Link to="/crear-cuenta" class="btn btn-block btn-primary">Nuevo Usuario</Link>
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

export default Login;