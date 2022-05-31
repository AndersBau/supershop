import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {

  return (
    <Card className='my-3 p3 rounded'>
      <a href={`/product/${props.product._id}`}>
        <Card.Img src={props.product} variant='top' />
      </a>
      <Card.Body>
      <a href={`/product/${props.product.image}`}>
        <Card.Title as='div'>
          <strong>{props.product.name}</strong>
        </Card.Title>
      </a>
      </Card.Body>
    </Card>


  )
}

export default Product;
