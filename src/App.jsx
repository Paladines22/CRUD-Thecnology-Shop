import './App.css';
import  ProductsForm from "./components/ProductsForm";
import ProductsList from './components/ProductsList';
import axios from 'axios'
import {useEffect, useState} from 'react'


function App() {

  const [data, setData] = useState([]);
  const [sendForm, setSendForm] = useState(null)


  const getAPIdata = () => {
      axios
      .get("https://products-crud.academlo.tech/products/")
      .then(resp => setData(resp.data))
      .catch(error => console.error(error))
  };

  useEffect( () => {
      getAPIdata()
  },[]);

  const createData = (data) => {
    axios
    .post("https://products-crud.academlo.tech/products/", data)
    .then( ()=> getAPIdata())
    .catch((error)=> console.error(error))
    console.log(data)
  };

  const deleteObject = (id) => {
      axios
        .delete(`https://products-crud.academlo.tech/products/${id}/`)
        .then( ()=>getAPIdata() )
      .catch((error) => console.error(error))
    console.log(data)
  }

  const updateObject = (data) => {
    setSendForm(data)
  }

  const updateData = (data)=>{
    axios.put(`https://products-crud.academlo.tech/products/${data.id}/`, data)
        .then( ()=> getAPIdata())
        .catch ((error)=> console.error(error))
        setSendForm(null)
  }

  return (
    <>
    <h1 className='first-title'>Thecnology <br/> Market Shop</h1>
    <div className="App">
      <ProductsForm
      createData={createData}
      selectProduct={sendForm}
      updateData={updateData}/>
      <ProductsList
      dataProduct={data}
      deleteObject={deleteObject}
      updateObject={updateObject}
      />
    </div>
    </>
    
  )
}

export default App
