import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../store/actions/productActions';
import Loader from '../components/loader';
import Message from '../components/message';
const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <h1>Newest Products</h1>
      {loading ? (
      <Loader />) : error ? (<Message variant='danger'>{error}</Message>
      ) :(
      <Row>
      {products.map((product) => (
        <Col key={product._id} sm ={12} md={6} lg={4} xl={3} >
          <Product product={product} />
        </Col>
      ))}
    </Row>)
      }
    </>
  )
}


export default HomeScreen;
