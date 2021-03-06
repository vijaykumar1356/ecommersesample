import React from "react";
import "./ProductListItem.css";
import {Link} from 'react-router-dom'
import RatingBar from './RatingBar'

export default function ProductListItem({image,price,name,slug,rating}) {
  return (
    <Link className="product--type-list" to={`/detail/${slug}`}>
      <img src={image} alt="" />
      <div className="product--type-list__info">
        <label htmlFor="product_name" className="product--type-list__title">
          {name}
        </label>
        <label className="product--type-list__price">Rs.{price}</label>
        {!!rating && <RatingBar input={rating}/>}
      </div>
    </Link>
  );
}
