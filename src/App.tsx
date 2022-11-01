import React from 'react';
import { Product } from './components/Product';
import { products } from './data/products';
import { IProduct } from './models';
import axios from 'axios';


function App() {

  async function fetchProduct() {
    await axios.get<IProduct[]>('https://fakestoreapi.com/products')
  }
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
  );
}

export default App;
