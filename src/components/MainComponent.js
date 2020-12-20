import React, { Component } from 'react';
import {Switch, Route, Redirect,Link} from 'react-router-dom';
import Buscador from './BuscadorComponent.js';
import Producto from './DetalleProductoComponent.js';
import './BuscadorComponent.css';

class Main extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
                /*<div>
                    <Switch>
                        <Route exact path="/" component={Buscador}/>
                        <Route path="/items/:id" component={Producto}/>
                        <Redirect path="/"/>
                    </Switch>
                </div>*/
                <>
                    <header class="header">
                        <div className="imgHeader">
                            <img src='Assets/Logo_ML.png' alt='logoMeli.jpg'/> 
                        </div>
                            <form className="buscadaForm">
                                <filedset>
                                    <input className="inputBarra" type="search"
                                        placeholder="Nunca dejes de buscar"
                                    />
                                    <div className="divImageBuscador">
                                        <button class="buttonBuscador"type="submit">
                                            <img src='Assets/ic_Search.png' alt='logoMeli.jpg'/> 
                                        </button>
                                    </div>
                                </filedset>
                            </form>
                    </header>
                        <div className="categoriaDiv">
                            <ul className="listaHorizontal">
                                <li className="itemCategoria">
                                    Electrónica, Audio y Video  
                                </li>
                                <li className="itemCategoria">
                                    IPod
                                </li>
                                <li className="itemCategoria">
                                    Reproductores
                                </li>
                                <li className="itemCategoria">
                                    IPod touch
                                </li>
                                <li className="itemCategoriaUltimo">
                                    32GB
                                </li>
                            </ul>
                        </div>
                        <ul className="listaArticulos">
                        <li>
                               <div className="divItemImagen">
                                    <img class="imgenListado" src='ImagenesIpod/Ipod1.jpg' alt='logoMeli.jpg'/> 
                               </div> 
                               <div className="divItemDesc">
                                    <span className="spanPrecio">
                                        $1980
                                    </span>
                                    <img src='Assets/ic_shipping.png' alt='logoMeli.jpg'/>
                                    <span className="spanNombre">
                                        Apple Touch 5g 16gb Negro Igual a Nuevo
                                    </span> 
                                    <span className="spanNombre">
                                        Completo Unico!
                                    </span> 
                                </div>
                                <div className="divItemCiudad">
                                    <span className="spanCiudad">
                                        Capital Federal
                                    </span>
                                </div>
                                <hr/>
                            </li>
                            <li>
                               <div className="divItemImagen">
                                    <img class="imgenListado" src='ImagenesIpod/Ipod2.jpg' alt='logoMeli.jpg'/> 
                               </div> 
                               <div className="divItemDesc">
                                    <span className="spanPrecio">
                                        $1980
                                    </span>
                                    <img src='Assets/ic_shipping.png' alt='logoMeli.jpg'/>
                                    <span className="spanNombre">
                                        Apple Touch 5g 16gb Negro Igual a Nuevo
                                    </span> 
                                    <span className="spanNombre">
                                        Completo Unico!
                                    </span> 
                                </div>
                                <div className="divItemCiudad">
                                    <span className="spanCiudad">
                                        Mendoza
                                    </span>
                                </div>
                                <hr/>
                            </li>
                            <li>
                               <div className="divItemImagen">
                                    <img class="imgenListado" src='ImagenesIpod/Ipod3.jpg' alt='logoMeli.jpg'/> 
                               </div> 
                               <div className="divItemDesc">
                                    <span className="spanPrecio">
                                        $1980
                                    </span>
                                    <img src='Assets/ic_shipping.png' alt='logoMeli.jpg'/>
                                    <span className="spanNombre">
                                        Apple Touch 5g 16gb Negro Igual a Nuevo
                                    </span> 
                                    <span className="spanNombre">
                                        Completo Unico!
                                    </span> 
                                </div>
                                <div className="divItemCiudad">
                                    <span className="spanCiudad">
                                        Capital Federal
                                    </span>
                                </div>
                                <hr/>
                            </li>
                            <li>
                               <div className="divItemImagen">
                                    <img class="imgenListado" src='ImagenesIpod/Ipod4.jpg' alt='logoMeli.jpg'/> 
                               </div> 
                               <div className="divItemDesc">
                                    <span className="spanPrecio">
                                        $1980
                                    </span>
                                    <img src='Assets/ic_shipping.png' alt='logoMeli.jpg'/>
                                    <span className="spanNombre">
                                        Apple Touch 5g 16gb Negro Igual a Nuevo
                                    </span> 
                                    <span className="spanNombre">
                                        Completo Unico!
                                    </span> 
                                </div>
                                <div className="divItemCiudad">
                                    <span className="spanCiudad">
                                        Capital Federal
                                    </span>
                                </div>
                                <hr/>
                            </li>
                        </ul>
                </>
        );
    }
   

}


export default Main;