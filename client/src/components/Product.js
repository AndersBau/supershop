import { useEffect } from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
 useEffect(() => {
   console.log('this is ', product)
 })
  return (
    <Card className='my-3 p3 rounded'>
      {/* <a href={`/product/${product}`}> */}
        {/* <Card.Img src={product.image} variant='top' /> */}


      <Card.Body>
      {/* <a href={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
      </a> */}
      </Card.Body>
    </Card>


  )
}

export default Product;
