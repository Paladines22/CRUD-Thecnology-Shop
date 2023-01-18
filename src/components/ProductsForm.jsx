import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form'


const ProductsForm = ({createData, selectProduct, updateData}) => {
  
  const {register, handleSubmit, formState:{errors}, reset } =  useForm();
  
  
  const getFormData = (data) => {
    
    if(selectProduct) {
      updateData(data)
    }else{
      createData(data);
      reset(
        {
          name:"",
          category: "",
          price : "",
          isAvailable : "",
        }
      )
    }
  }

  useEffect ( ()=> {
    if(selectProduct !== null) {
      reset(selectProduct)
    }else {
      reset(
        {
          name:"",
          category: "",
          price : "",
          isAvailable : "",
        }
      )
    }
  },[selectProduct])

  return (
    <div className='container-form'>
      <form action="" onSubmit={handleSubmit(getFormData)}>
        <div className='line-form-container'>
          <label htmlFor="product-name">Name</label>
          <input 
          type="text"
          id="product-name"
          {...register("name")}
        />
        </div>
        <div  className="input-wrapper line-form-container">
          <label htmlFor="product-category">Category</label>
          <input
            type="text"
            id="product-category"
            {...register("category")}
          />
        </div>
        <div className="input-wrapper line-form-container">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            {...register("price")}
          />
        </div>
        <div className="input-wrapper line-form-container">
          <label htmlFor="product-available">Disponibilidad</label>
          <input
            type="text"
            id="product-available"
            {...register("isAvailable")}
          />
        </div>
        <button className='form-btn' type="submit">Crear</button>
      </form>
    </div>
  )


}
export default ProductsForm