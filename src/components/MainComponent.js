import React, { Component } from 'react';
import {Switch, Route, Redirect,Link} from 'react-router-dom';
import Buscador from './BuscadorComponent.js';
import Categorias from './CategoriasComponent.js'
import Listado from './Listado.js';
import Producto from './DetalleProductoComponent.js'
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
                    <Buscador>
                    </Buscador>
                    <Categorias>
                    </Categorias>
                    <Listado>
                    </Listado>
                    <Producto>
                    </Producto>
                </>
        );
    }
   

}


export default Main;