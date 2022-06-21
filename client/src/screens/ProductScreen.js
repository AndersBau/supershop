import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/loader";
import Message from "../components/message";
import { listProductDetails } from "../store/actions/productActions";
const ProductScreen = ({ match })=> {
  const dispatch = useDispatch();

  const productDetails = useSelector( state => state.productDetails)
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match])
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      {loading ? (
      <Loader />) : error ? (<Message variant='danger'>{error}</Message>
      ) :(
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              price: ${product.price}
            </ListGroup.Item>
            <ListGroupItem>
              Description: ${product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>
                  <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}
    </>
  )
}

export default ProductScreen;
