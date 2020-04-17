import React, { useState } from "react";

const NewProductForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [price, setPrice] = useState("");
  const [score, setScore] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addProduct({ title, review, price, score, imgUrl });
    setTitle("");
    setReview("");
    setPrice("");
    setScore("");
    setImgUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product name: </label>
      <input
        type="text"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <label>Review: </label>
      <input
        type="text"
        value={review}
        required
        onChange={e => setReview(e.target.value)}
      />
      <br />
      <label>Price: </label>
      <input
        type="text"
        value={price}
        required
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <label>Score: </label>
      <input
        type="text"
        value={score}
        required
        onChange={e => setScore(e.target.value)}
      />
      <br />
      <label>Image URL: </label>
      <input
        type="text"
        value={imgUrl}
        required
        onChange={e => setImgUrl(e.target.value)}
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default NewProductForm;
