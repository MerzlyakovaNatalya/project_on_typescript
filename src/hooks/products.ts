import React, { useEffect, useState } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';

export const useProducts = () => {
    const [product, setData] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
   
     async function fetchProduct() {
       try {
         setError('');
         setLoading(true);
         const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
         setData(response.data);
         setLoading(false);
       }catch (e: unknown) {
         setLoading(false);
         const error = e as AxiosError;
         setError(error.message);
       }
     }

     useEffect(() => {
        fetchProduct();
      }, [])

      return {product, loading, error}
      
}