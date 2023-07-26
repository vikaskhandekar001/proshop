import React,{useEffect,useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import {Rating} from '../components/Rating';
import axios from 'axios';
import { FaAmazon } from 'react-icons/fa';
const ProductScreen = () => {
const [product,setProduct] = useState({})
  const {id: productId} = useParams();

useEffect(()=>{
const fetchProduct = async ()=> {
  const {data}=  await axios.get(`/api/products/${productId}`);

  console.log(" ",data)
    setProduct(data)


}
    fetchProduct();

},[productId])
//   const product = products.find((product) => product._id == productId);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col className="" md={5}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col className="" md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product?.rating}
                text={`${product?.numsOfRating} Reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3> Price: ${product?.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{product?.description}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="" md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>price: </Col>
                  <Col>
                    <strong> ${product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>status: </Col>
                  <Col>
                    <strong>
                      {' '}
                      {product?.countInStock > 0 ? 'in stock' : 'out of stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn- block"
                  type="button"
                  disabled={product?.countInStock < 0}>
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
