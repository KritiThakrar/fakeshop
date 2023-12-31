import React, {useEffect} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () =>
{
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    //   console.log(products);
    const fetchProducts = async () =>
    {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) =>
            {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };
    useEffect(() =>
    {
        fetchProducts();
    }, []);
    console.log("Products: ", products);
  return (
    <div className='container mx-auto px-4'>
          {/* <div className='text-4xl mt-5 text-left'>ProductListing</div> */}
          <ProductComponent />
    </div>
  )
}

export default ProductListing
