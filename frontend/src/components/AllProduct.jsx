import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardFeature from './CardFeature';
import FilterProduct from './FilterProduct';

const AllProduct = ({heading}) => {
  const productData = useSelector((state) => state.product.productList);

  const categoryList = [...new Set(productData.map(el => el.category))];

  const loadingArrayVegetables = new Array(17).fill(null);
  
  // eslint-disable-next-line no-lone-blocks
  {/* filter data display */}
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData)
  }, [productData])

  const handleFilterProduct = (category) => {
    const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase());
    setDataFilter(() => {
      return [
        ...filter
      ]
    })
  }

  return (
    <div className='my-5'>
        <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>
        <div className='flex gap-4 justify-center overflow-scroll scrollbar-none cursor-pointer'>
          {
            categoryList[0] ? categoryList.map((el, index) => {
              return (
                <FilterProduct key={index} category={el} onClick={() => {handleFilterProduct(el)}} />
              )
            }) : (
              <div className='min-h-[150px] flex justify-center items-center'>
                <p>Loading...</p>
              </div>
            )
          }
        </div>
        <div className='flex flex-wrap justify-center gap-4 my-6'>
          {
            dataFilter[0] ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              )
            }) : (
              loadingArrayVegetables.map((el, index) => {
                  return (
                    <CardFeature key={index} loading="Loading..." />
                  )
              })
            )
          }
        </div>
      </div>
  )
}

export default AllProduct;