import React, { useState, useEffect } from "react";
import { Card, Container, Badge, Button, Row } from "react-bootstrap";

import "./card-style.css";

// import ProductList from "./ProductList";

export function ProductCard(props) {
  return (
    <div className="product-list">
      <Container>
        <Row>
          {props.product.map(product => {
            return (
              <Card
                id="Card"
                key={product.id}
                className="h-100 shadow-sm bg-white rounded"
              >
                <Card.Img
                  id="main-img"
                  variant="top"
                  className="img-fluid"
                  src={product.imgUrl}
                />
                <div className="card-img-overlay">
                  <img
                    className="heart"
                    src="https://i.imgur.com/z6Seu1T.png"
                    alt="favorite-heart"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex mb-2 justify-content-between">
                    <Card.Title
                      id="title"
                      className="mb-0 font-weight-bold text-truncate"
                    >
                      {product.title}
                    </Card.Title>
                    <Badge
                      id="Price-badge"
                      pill
                      className="mb-1"
                      variant="warning"
                    >
                      ${product.price}
                    </Badge>
                  </div>
                  {/* <Card.Text
                    id="card-text"
                    className="text-secondary text-truncate"
                  >
                    {product.review}
                  </Card.Text> */}

                  <Container className="middle-section">
                    <div className="star-score">
                      <img
                        className="star"
                        src="https://i.imgur.com/7CAZ8cT.png"
                        alt="stars"
                      />
                      <img
                        className="star"
                        src="https://i.imgur.com/7CAZ8cT.png"
                        alt="stars"
                      />
                      <img
                        className="star"
                        src="https://i.imgur.com/7CAZ8cT.png"
                        alt="stars"
                      />
                      <img
                        className="star"
                        src="https://i.imgur.com/7CAZ8cT.png"
                        alt="stars"
                      />
                      <img
                        className="star"
                        src="https://i.imgur.com/7CAZ8cT.png"
                        alt="stars"
                      />
                    </div>
                    <div className="retailers">
                      <img
                        className="amazon"
                        src="https://i.imgur.com/B5vpfpp.png"
                        alt="amazon"
                      />
                      <img
                        className="walmart"
                        src="https://i.imgur.com/rb4QyCq.png"
                        alt="walmart"
                      />
                      <img
                        className="target"
                        src="https://i.imgur.com/yRoHsnv.png"
                        alt="target"
                      />
                      <img
                        className="ebay"
                        src="https://i.imgur.com/LdH3t8M.png"
                        alt="ebay"
                      />
                      <img
                        className="facebook"
                        src="https://i.imgur.com/Qr8TePZ.png"
                        alt="facebook-marketplace"
                      />
                    </div>
                  </Container>

                  <Container id="Bottom-section">
                    <Button
                      id="Read-button"
                      className="mt-auto btn-outline-primary font-weight-bold"
                      variant="success"
                      block
                    >
                      <span className="review">View More</span>
                    </Button>
                    <Button
                      id="Review-button"
                      className="mt-auto btn-outline-primary font-weight-bold"
                      variant="success"
                      block
                    >
                      <span className="review">Review</span>
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
