import React, { useState } from 'react';
import CardDetailsComponent from './CardDetailsComponent';

const Card = ({ image, title, description, price, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img width='300px' src={image} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};
<CardDetailsComponent/>

const CardList = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg',
      title: 'Chair',
      description: 'Golden Easy Spot Chair.',
      price: '120.00',
      LifeStyle:'LaaVista Depro, FX 829 v1',
      img: 'https://img.freepik.com/free-vector/beautiful-colorful-circles-set-six_1017-30942.jpg',
      size: 'S     M      XL      XXL',

      // Add other properties as needed
    },
    {
      id: 2,
      image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg',
      title: 'Chair',
      description: 'Golden Easy Spot Chair.',
      price: '210.00',
      LifeStyle:'LaaVista Depro, FX 829 v1',
      img: 'https://img.freepik.com/free-vector/beautiful-colorful-circles-set-six_1017-30942.jpg',
      size: 'S     M      XL      XXL',
    },
    {
        id: 3,
        image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg',
        title: 'Chair',
        description: 'Golden Easy Spot Chair.',
        price: '250.00',
        LifeStyle:'LaaVista Depro, FX 829 v1',
        img: 'https://img.freepik.com/free-vector/beautiful-colorful-circles-set-six_1017-30942.jpg',
        size: 'S     M      XL      XXL',
      },
      {
        id: 4,
        image: 'https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg',
        title: 'Chair',
        description: 'Golden Easy Spot Chair.',
        price: '320.00',
        LifeStyle:'LaaVista Depro, FX 829 v1',
        img: 'https://img.freepik.com/free-vector/beautiful-colorful-circles-set-six_1017-30942.jpg',
        size: 'S     M      XL      XXL',
      },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          price={card.price}
          onClick={() => handleCardClick(card)}
        />
      ))}
      {selectedCard && <CardDetailsComponent card={selectedCard} />}
    </div>
  );
};

export{CardList} ;
