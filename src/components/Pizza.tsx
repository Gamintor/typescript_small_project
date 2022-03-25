import React from 'react';
import PizzaCSS from './Pizza.module.css';
import { useStateDispatch } from './AppState';
import { Pizza } from '../types';

interface Props {
	pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
	const dispatch = useStateDispatch();

	const handleAddToCart = () => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: {
				item: { ...pizza },
			},
		});
	};

	return (
		<li className={PizzaCSS.container}>
			<h2>{pizza.name}</h2>
			<p>{pizza.description}</p>
			<p>{pizza.price}</p>
			<button type='button' onClick={handleAddToCart}>
				Add to Cart
			</button>
		</li>
	);
};

export default PizzaItem;
