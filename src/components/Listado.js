import React, { Component } from 'react';
import '../styles/listado.scss';


function Listado(props) {
    if(props.articulos!=null)
    return(
        <ul className="listaArticulos">
            {
                props.articulos.map((articulo) => {
                    if(articulo.shipping.free_shipping)
                    return(
                        <li>
                            <div className="divItemImagen">
                                <img className="imgenListado" src={articulo.thumbnail} alt='logoMeli.jpg'/> 
                            </div> 
                            <div className="divItemDesc">
                                <span className="spanPrecio">
                                    $
                                    {articulo.price}
                                </span>
                                <img src='http://localhost:3000/Assets/ic_shipping.png' alt='logoMeli.jpg'/>
                                <span className="spanNombre">
                                    {articulo.title}
                                </span> 
                                <span className="spanNombre">
                                    {articulo.condition}
                                </span> 
                            </div>
                            <div className="divItemCiudad">
                                <span className="spanCiudad">
                                    {articulo.address.state_name}
                                </span>
                            </div>
                            <hr/>
                        </li>
                    )
                    else
                    return(
                        <li>
                            <div className="divItemImagen">
                                <img className="imgenListado" src={articulo.thumbnail} alt='logoMeli.jpg'/> 
                            </div> 
                            <div className="divItemDesc">
                                <span className="spanPrecio">
                                    $
                                    {articulo.price}
                                </span>
                                <span className="spanNombre">
                                    {articulo.title}
                                </span> 
                                <span className="spanNombre">
                                    Completo Unico!
                                </span> 
                            </div>
                            <div className="divItemCiudad">
                                <span className="spanCiudad">
                                    {articulo.address.state_name}
                                </span>
                            </div>
                            <hr/>
                        </li>
                    )
                })    
            }
        </ul>
    )
}

export default Listado;