import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetail = () =>
{
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);
    const fetchProductDetail = async () =>
    {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${ productId }`)
            .catch((err) =>
            {
                console.log("Err: ", err);
            });
        // console.log(response.data);
        dispatch(selectedProducts(response.data));
    }
    useEffect(() =>
    {
        if (productId && productId !== "") fetchProductDetail();
        return () => { dispatch(removeSelectedProduct());}
    }, [productId]);
    return (
        <div className="container mx-auto px-40 py-10">
            {Object.keys(product).length === 0 ?
                (
                    <div>...Loading</div>
                ) : (
                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                        <div className="border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="grid grid-cols-2 divide-x">
                                <img className="rounded-lg h-fit pr-8" src={image} alt={title} />
                                <div className='px-6'>
                                    <div className="mb-8 text-left">
                                        <div className="text-gray-900 font-bold text-3xl mb-5 ">Can coffee make you a better developer?</div>
                                        <button type="button" class="mb-10 flex rounded-lg bg-sky-400 px-5 pb-2 pt-2.5 text-xl font-medium uppercase font-semibold text-white">
                                            $ {price}
                                        </button>
                                        <button type="button" class="text-red-900 w-full hover:text-white border border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-left mr-2 mb-2 dark:border-gray-600 dark:text-red-900 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                            {category}
                                        </button>
                                        <p className="text-gray-700 text-base mt-6">{description}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-6 py-3.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div >
    )
}

export default ProductDetail
