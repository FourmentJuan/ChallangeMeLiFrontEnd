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

        const Principal = () => {
            return(
                <div>
                </div>
            )
        }
    

        return(
                <>
                    <Buscador></Buscador>
                    <Switch>
                        <Route path="/items/:id" exact component={Producto} />
                        <Route path="/items" exact component={Listado}/>
                        <Route path="/" component={Principal} />
                    </Switch>
                </>
        );
    }
   

}


export default Main;