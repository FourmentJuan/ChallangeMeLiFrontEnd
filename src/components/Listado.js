import React from 'react';
import '../styles/listado.scss';


function Listado(props) {
    let i=0;
    if(props.articulos!=null)
    return(
        <ul className="listaArticulos">
            {
                props.articulos.map((articulo) => {
                    i++;
                    if(articulo.shipping.free_shipping)
                    return(
                        <li key={articulo.id}>
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
                        <li key={articulo.id}>
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
                })  
            }
        </ul>
    )
}

export default Listado;