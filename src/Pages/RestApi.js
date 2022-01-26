import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Container , Col, Row, Card , CardGroup ,FormControl } from "react-bootstrap";
//  import 
//  img1 from '../components/images/img1.jpg ';

const RestApi = () => {
  const [products, setProducts] = useState([]);

  // useEffect (()=> {
  // axios
  // .get("https://jsonplaceholder.typicode.com/posts")
  // .then(res => {
  //     console.log(res)
  //     setPosts(res.data)

  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  // },[] )

  const API = "https://fakestoreapi.com/products?limit=5";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <h2>Fetch Data with REST API</h2>
      
      <ul>
        <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
            />
        {products.map((post) => (
          <li key={post.id}>
          {/* <card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />

            <Card.Title>{post.title}</Card.Title>
            <Card>
              <Card.Body>{post.category}</Card.Body>
            </Card>
            <Card>
              <Card.Body> {post.price}</Card.Body>
               <Button variant="primary">
               Add to Card
               </Button>
            </Card>
            </card> */}

         <Container>
           <Row>
             <Col md={12}>
             
<CardGroup>
  <Card className="mb-3" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="img1/100px160" />
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
     <ul> category :{post.category}</ul>
     <ul> Price: {post.price}</ul>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="mb-3" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="mb-3" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
             </Col>
           </Row>
         </Container>   
 
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestApi;
