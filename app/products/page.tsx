'use client';

import Cover from '@/components/Cover';
import Universal from '@/components/Universal';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '@/store/features/productsSlice';
import { useGetpostsQuery } from '@/store/features/fetchQuerySlice';
import { useEffect } from 'react';
import Image from 'next/image';

const Products = () => {
  const { data } = useGetpostsQuery('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(getAllProducts(data));
    }
  }, [data, dispatch]);

  const products = useSelector((state: any) => state?.product?.products);

  console.log(products);

  return (
    <Universal>
      <Cover name="Products" />
      <section className="bg-gray-100 text-center product">
        <h1>Our Products</h1>
        <p>Choose from our range of products</p>
        <div className="container">
          <div className="product-wrapper">
            {Object.values(products).map((v: any, k) => {
              return (
                <div key={k}>
                  <div>
                    <Image src={v?.image} alt="" width={300} height={130} />{' '}
                  </div>
                  <h2>{v?.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Universal>
  );
};

export default Products;
