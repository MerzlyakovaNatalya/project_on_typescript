import React, { useState } from 'react'
import { CreteProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';


function App() {

  const {product, loading, error} = useProducts();
  const [modal, setModal] = useState(true)
 
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {product.map(product => <Product product={product} key={product.id}/>)}
      {modal && <Modal title="Create new Product">
        <CreteProduct onCreate={() => setModal(false)}/>
      </Modal>}
    </div>
  );
}

export default App;
