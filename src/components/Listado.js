import React from 'react';
import '../styles/listado.scss';
import Categorias from './CategoriasComponent';

function Listado(props){

    return(
        <>
            <Categorias/>
            <ul className="listaArticulos">
                <li>
                    <div className="divItemImagen">
                        <img class="imgenListado" src='http://localhost:3000/ImagenesIpod/Ipod1.jpg' alt='logoMeli.jpg'/> 
                    </div> 
                    <div className="divItemDesc">
                        <span className="spanPrecio">
                            $1980
                        </span>
                        <img src='http://localhost:3000/Assets/ic_shipping.png' alt='logoMeli.jpg'/>
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
                        <img class="imgenListado" src='http://localhost:3000/ImagenesIpod/Ipod2.jpg' alt='logoMeli.jpg'/> 
                    </div> 
                    <div className="divItemDesc">
                        <span className="spanPrecio">
                            $1980
                        </span>
                        <img src='http://localhost:3000/Assets/ic_shipping.png' alt='logoMeli.jpg'/>
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
                        <img class="imgenListado" src='http://localhost:3000/ImagenesIpod/Ipod3.jpg' alt='logoMeli.jpg'/> 
                    </div> 
                    <div className="divItemDesc">
                        <span className="spanPrecio">
                            $1980
                        </span>
                        <img src='http://localhost:3000/Assets/ic_shipping.png' alt='logoMeli.jpg'/>
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
                        <img class="imgenListado" src='http://localhost:3000/ImagenesIpod/Ipod4.jpg' alt='logoMeli.jpg'/> 
                    </div> 
                    <div className="divItemDesc">
                        <span className="spanPrecio">
                            $1980
                        </span>
                        <img src='http://localhost:3000/' alt='logoMeli.jpg'/>
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
    )
    
}

export default Listado;