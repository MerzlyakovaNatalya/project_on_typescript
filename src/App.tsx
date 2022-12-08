import React, { useState } from 'react'
import { CreteProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { Layout } from './components/Editor';


function App() {

  const {product, addProduct, loading, error} = useProducts();
  const [modal, setModal] = useState(true)
  
  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Layout></Layout>
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {product.map(product => <Product product={product} key={product.id}/>)}
      {modal && <Modal title="Create new Product" onClose={() => setModal(false)}>
        <CreteProduct onCreate={createHandler}/>
      </Modal>}
      <button className="fixed py-4 px-2 bottom-5 right-5 bg-red-700" onClick={() => setModal(true)}>+</button>
    </div>
  );
}

export default App;
