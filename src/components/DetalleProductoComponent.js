import React from 'react';
import './BuscadorComponent.css';

function Producto(props) {
    return(
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
    );
}

export default Producto;   