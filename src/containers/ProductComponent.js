import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () =>
{
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) =>
    {
        const { id, title, image, price, category } = product;
        return (
            <div key={id}>
                <Link to={`/product/${ id }`}>
                    <div className="max-w-sm h-full border border-gray-200 block rounded-lg shadow">
                        <div className='p-3'>
                            <img className="h-56 w-56 rounded-lg mx-auto" src={image} alt={title} />
                            <div className="mb-2 text-xl text-left font-bold text-gray-900">{title}</div>
                            <div className="mb-2 text-xl text-left font-bold text-gray-900">$ {price}</div>
                            <div className="flex text-sm font-medium text-gray-500 mb-2">{category}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return (
        <div className="container mx-auto py-7">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="grid grid-cols-2 lg:grid-cold-4 md:grid-cols-3 sm:grid-cols-2 mt-7 gap-3">
                        {renderList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
