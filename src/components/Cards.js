import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our vision</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Explore the hidden world of e-library'
              label='Knowledge'
              path='/vision'
            />
            <CardItem
              src='images/image2.jpg'
              text='Accessibility to millions of books'
              label='Uncountibility'
              path='/vision'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image3.jpg'
              text='Keep it always in your  table'
              label='Varity'
              path='/vision'
            />
            <CardItem
              src='images/image4.png'
              text='Books into your pocket'
              label='Mobile friendly'
              path='/vision'
            />
            <CardItem
              src='images/image5.jpg'
              text='Free to use'
              label='Generality'
              path='/vision'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;