import React, {useEffect, useState} from 'react';
import {useParams, Link, Navigate, useNavigate} from 'react-router-dom';
import {Row, Col, Form, Image, ListGroup, Card, Button} from 'react-bootstrap';
import {Rating} from '../components/Rating';
import axios from 'axios';
import {FaAmazon} from 'react-icons/fa';
import {useGetProductDetailsQuery} from '../slices/productApiSlice.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message';
import {addToCart} from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
const ProductScreen = () => {
  const {id: productId} = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({...product, qty}));
    navigate('/cart');
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"></Message>
      ) : (
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
                          {product?.countInStock > 0
                            ? 'in stock'
                            : 'out of stock'}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}>
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option value={x + 1} key={x + 1}>
                                  {x + 1}
                                </option>
                              ),
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      className="btn- block"
                      type="button"
                      disabled={product?.countInStock < 0}
                      onClick={addToCartHandler}>
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
