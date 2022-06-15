import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../store/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
  }, [])


  return (
    <>
      <h1>Newest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm ={12} md={6} lg={4} xl={3} >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}


export default HomeScreen;
