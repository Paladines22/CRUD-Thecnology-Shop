import React from "react"

const ProductsList = ({dataProduct, deleteObject, updateObject}) => {


  return (
    <ul className="container-products">
      {dataProduct.map((objectProduct, index) =>  
        <li className="product-card" key={index}>
            <p>Nombre: <span> {objectProduct.name}</span></p>
            <p>Categoria: <span> {objectProduct.category}</span></p>
            <p>Precio: <span> {objectProduct.price}</span></p>
            <p>Disponibilidad: <span> {objectProduct.isAvailable.toString()}</span></p>
            <div className="buttons-container">
              <button className="btn-delete" onClick={ ()=> deleteObject(objectProduct.id)}>Eliminar</button>
              <br />
              <button className="btn-update" onClick={ ()=> updateObject(objectProduct)}>Editar</button>
            </div>
        </li>
      
      )}
      
    </ul>
  )
}

export default ProductsList;