import { Card } from "react-bootstrap";

const Product = (props) => {
  const product = props.name;
  return (
    <Card className='my-3 p3 rounded'>
      <a href={`/product/${product.name}`}>
        <Card.Img src={props.name.image} variant='top' />
      </a>

      <Card.Body>
      <a href={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
      </a>
      </Card.Body>
    </Card>
  )
}

export default Product;
