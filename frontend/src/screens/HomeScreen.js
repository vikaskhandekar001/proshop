import { ErrorResponse } from '@remix-run/router';
import React,{useEffect,useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product.js';
import { useGetProductsQuery } from '../slices/productApiSlice.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
const HomeScreen = () => {

  const { data:products,isLoading,error} = useGetProductsQuery();

  return (
    <>
    {isLoading? (<Loader/>) : error ? (<Message variant={'danger'}>{error?.data?.message || error?.error}</Message>): (<> <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} ld={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row></>)}
      
    </>
  );
};

export default HomeScreen;
