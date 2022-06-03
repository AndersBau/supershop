import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
const ProductScreen = ()=> {
  const params = useParams();
  const product = products.find(p => p._id === params.id);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image}></Image>
        </Col>
        <Col md={3}>

        </Col>
      </Row>
    </>
  )
}

export default ProductScreen;
