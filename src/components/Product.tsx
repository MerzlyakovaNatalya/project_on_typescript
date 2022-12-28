import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct
}

export function Product({product}: ProductProps) {

  const [details, setDetails] = useState(false);
    return (
      <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
        <img src={product.image} className="w-1/6" alt={product.title}/>
        <p>{product.title}</p>
        <p>{product.price}</p> 
        <button 
        className="py-2 px-2 border bg-yellow-400"
        onClick={() => setDetails((prev) => !prev)}
        >{details? "Hide details" : "Show details"}
        </button>
        {details && <div>
          {product.description}
          <p>Ret: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
          </div>}
      </div>
    );
  }
  