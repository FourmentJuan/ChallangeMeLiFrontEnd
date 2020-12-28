import React, { Component } from 'react';
import Buscador from './BuscadorComponent.js';
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
                </>
        );
    }
   

}


export default Main;