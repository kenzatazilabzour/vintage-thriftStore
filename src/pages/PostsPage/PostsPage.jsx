import React, { useState, useEffect } from 'react';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import './PostsPage.css';

export default function Profile({ user, products }) {
  return (
    <div className="profile-container">
      <div className="user-info">
        <h2>{user.username}'s Profile</h2>
        <p>Email: {user.email}</p>
      </div>
      <div className="user-products">
        <h3>Posts</h3>
        {
          products.map((p, idx) => <FeaturedProduct key={p._id} product={p} />)
        }

      </div>
    </div>
  );
}
