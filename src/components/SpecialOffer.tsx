import React from 'react';
import { Pizza } from '../types';
import { AddToCartProps, withAddToCart } from './AddToCart';
import { useStateDispatch } from './AppState';
import SpecialCSS from './SpecialOffer.module.css';

interface Props extends AddToCartProps {
	pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
	const handleAddToCart = () => {
		addToCart({ ...pizza });
	};

	return (
		<div className={SpecialCSS.container}>
			<h2>{pizza.name}</h2>
			<p>{pizza.description}</p>
			<p>{pizza.price}</p>
			<button type='button' onClick={handleAddToCart}>
				Add to Cart
			</button>
		</div>
	);
};

export default withAddToCart(SpecialOffer);
