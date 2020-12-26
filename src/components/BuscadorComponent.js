import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/buscador.scss';
import Listado from './Listado.js'


class Buscador extends Component{

    constructor(props){
        super(props);

        this.state = {
            inputvalue:"",
            articulos:null
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

   
    handleClick(){
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=:'+this.state.inputvalue)
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({
                articulos:response.results
            });
        })
    }


    handleInputChange = (event) => {
        this.setState({
            inputvalue: event.target.value
        });
    }
    

    render(){
        if(this.state.articulos==null)
        return(
            <div className="header">
                <div className="imgHeader">
                    <Link to="/">
                        <img src="http://localhost:3000/Assets/Logo_ML.png" alt='logoMeli.jpg'/>
                    </Link>
                </div>
                    <input className="inputBarra" type="search"
                        placeholder="Nunca dejes de buscar" id="texto" onChange={this.handleInputChange}
                    />
                    <div className="divImageBuscador">
                        <button className="buttonBuscador" onClick={this.handleClick}>
                            <img src='http://localhost:3000/Assets/ic_Search.png' alt='logoMeli.jpg'/> 
                        </button>
                    </div>
            </div>
        );
        else
        return(
            <>
                <div className="header">
                    <div className="imgHeader">
                        <Link to="/">
                            <img src="http://localhost:3000/Assets/Logo_ML.png" alt='logoMeli.jpg'/>
                        </Link>
                    </div>
                        <input className="inputBarra" type="search"
                            placeholder="Nunca dejes de buscar" id="texto" onChange={this.handleInputChange}
                        />
                        <div className="divImageBuscador">
                            <button className="buttonBuscador" onClick={this.handleClick}>
                                <img src='http://localhost:3000/Assets/ic_Search.png' alt='logoMeli.jpg'/> 
                            </button>
                        </div>
                </div>
                <Listado articulos={this.state.articulos}/>
            </>
        )
    }

}

export default Buscador;   