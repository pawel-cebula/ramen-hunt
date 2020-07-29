import React, { Component, useState, useEffect } from "react";

const Bowl = ({ name, style, comment, rating, username }) => {
    return (
        <div className="bowl-item">
            <h2>{name}</h2>
            <h4>Style: {style}</h4>
            <h4>Rating: {rating}</h4>
            <p>{comment}</p>
            <small>Author: {username}</small>
        </div>
    );
}

export default Bowl;