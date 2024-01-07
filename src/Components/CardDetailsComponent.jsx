import React, { useState } from 'react';

const CardDetailsComponent = ({ card }) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  if (!card) {
    return null;
  }

  const { title, image, description, price, LifeStyle, img, size, ...otherDetails } = card;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <br /><br /><br /><center>
      <div className="card-details pt-3" style={{ border: '10px solid black', margin: '50px', background: 'white' }}>
        <center><div className="row">
          <div className="col-md-6">
            <h2>{title}</h2>
            <img width='300px' src={image} alt={title} />
          </div>
          <div className="col-md-6">
            <p>LifeStyle :</p>
            <h5>{LifeStyle}</h5>
            <img src={img} width='100' />
            <h6><b>Size:</b> {size}</h6>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <div>
              {/* Quantity section with increment and decrement buttons */}
              <p>
                Quantity:
                &nbsp;<button onClick={decrementQuantity} style={{background:'red',border:'none',padding:'10px'}}>-</button>
                {quantity}
                <button onClick={incrementQuantity} style={{background:'red',border:'none',padding:'10px'}}>+</button>
              </p>
            </div>
            {/* Display additional details */}
            {Object.keys(otherDetails).map((key) => (
              <p key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {otherDetails[key]}
              </p>
            ))}
          </div>
        </div>
        <br /><br /></center>
      </div>
      </center>
    </>
  );
};

export default CardDetailsComponent;
