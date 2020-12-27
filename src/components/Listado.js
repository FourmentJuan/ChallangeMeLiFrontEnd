import React, { Component } from 'react';
import '../styles/listado.scss';
import Producto from './DetalleProductoComponent';

class Listado extends Component {

    constructor(props){
        super(props);

        this.state = {
            articulo:null
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = (value,event) => {
        console.log('https://api.mercadolibre.com/items?ids='+ value);
        fetch('https://api.mercadolibre.com/items?ids='+ value)
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({
                articulo:response
            });
        })
        
    }
        
       

    render(){
        if(this.state.articulo!=null)
            return(
                <Producto articulo={this.state.articulo}/>
            )
        if(this.props.articulos!=null)
            return(
                <ul className="listaArticulos">
                    {
                        this.props.articulos.map((articulo) => {
                            if(articulo.shipping.free_shipping)
                            return(
                                <li key={articulo.id} onClick={this.handleClick.bind(this,articulo.id)}>
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
    
}

export default Listado;