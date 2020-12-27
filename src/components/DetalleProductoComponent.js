import React from 'react';
import '../styles/articulo.scss';

function Producto(props) {
      console.log("LOs articulos: " + props.articulo);
    if(props.articulo!=null)
      return(
        props.articulo.map((detalle) => {
          return(
            <div className="vistarArticulo" key={detalle.body.id}>
            <div className="imagenArticuloDescripcion">
                <img className="imagenArticuloGrande" src={detalle.body.thumbnail} alt='logoMeli.jpg'/> 
                <div className="discripArticuloDiv">
                    <span className="textoDescProduct">Descripción del producto</span>
                    <span className="DescProduct">
                      {detalle.body.descriptions[0].id}
                    </span>
                </div>
             </div>
              <div className="nombreArticuloPrecio">
                <span className="cantidadVendidos">
                  {detalle.body.condition}
                  - {detalle.body.sold_quantity}
                </span>
                <span className="nombreArticulo">
                  {detalle.body.title}
                </span>
                <span className="precioArticulo">
                  $
                  {detalle.body.price}
                </span>
                <button className="buttonComprar">
                  Comprar
                </button>
              </div>
          </div>
          )
        })
      )
     
}

export default Producto;   