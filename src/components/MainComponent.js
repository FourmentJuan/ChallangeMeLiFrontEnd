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
                        <div className="vistarArticulo">
                            <div className="imagenArticuloDescripcion">
                                <img className="imagenArticuloGrande" src='ImagenesIpod/Ipod4.jpg' alt='logoMeli.jpg'/> 
                                <div className="discripArticuloDiv">
                                    <span className="textoDescProduct">Descripción del producto</span>
                                    <span className="DescProduct">
                                        The Scarpe di Banco Italian collection was founded by Bill White in 2009. Di Bianco
                                        offers classic handmade men's shoes with a modern twist. The combination of timeless
                                        models and details with contemporary colors and styling, results in decidedly current, yet,
                                        elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoes
                                        buying experience through a multitude of models, lasts, soles, leathers, and color options.
                                    </span>
                                </div>
                            </div>
                            <div className="nombreArticuloPrecio">
                                <span className="cantidadVendidos">
                                    Nuevo - 234 vendidos
                                </span>
                                <span className="nombreArticulo">
                                    Deco Reverse Sombrero Oxford
                                </span>
                                <span className="precioArticulo">
                                    $ 1.980
                                </span>
                                <button className="buttonComprar">
                                    Comprar
                                </button>
                            </div>
                        </div>
                </>
        );
    }
   

}


export default Main;